import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import Interests from './Interests';


const CardProfile = () => {

    const { putUser, token, userDispatch, updateUser } = useContext(UserContext);

    const [file, setFile] = useState("")

    useEffect(() => {
        localStorage.setItem('updateUser', JSON.stringify(updateUser))
    }, [updateUser])

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('myImage', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.put(`http://localhost:5000/users/uploads/${token.id}`, formData, config)
            .then(res => {
                alert("The file is successfully uploaded")
                userDispatch({ type: "postPicture", payload: res.data.data.name })

            })
            .catch(error => { console.log(error) })
    }

    const changeImageHandler = (event) => {
        setFile(event.target.files[0])
    }




    return (
        <div className='container__bg'>
            <div className='container__cards'>

                <div className='cards'>

                    <div className='cardProfile'>
                        <div className='pseudo__cardProfile'>
                            <h1>{token.pseudonyme}</h1>
                        </div>
                        <div className='img__pseudo__cardProfile'>
                            <div className='img__pseudo'>
                                <img src={updateUser.picture} alt="Avatar profil" />
                                <h1>File Upload</h1>
                                <form onSubmit={formSubmitHandler}>
                                    <input type="file" name="myImage" onChange={changeImageHandler} accept='.jpg, .jpeg, .png ' />
                                    <button type="submit" >Upload</button>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='card__interests'>
                    {/* Composant Chexbox des centres d'interêts */}
                    <Interests />
                    <form>
                        <div className='description__cardProfile'>
                            <label for="description">Décrivez-vous en quelques mots:</label>
                            <input type="Text" onChange={(event) => userDispatch({ type: "postContent", payload: event.target.value })} id="description" name="description" />
                        </div>
                        <div className='description__cardProfile'>
                            <label for="localité">Localité</label>
                            <input type="Text" onChange={(event) => userDispatch({ type: "postVille", payload: event.target.value })} id="localite" name="localité" />
                        </div>

                    </form>
                    <div className='button__validation'>
                        <button onClick={putUser}> ✔</button>
                    </div>
                </div>

            </div>
        </div>

    );
};




export default CardProfile;