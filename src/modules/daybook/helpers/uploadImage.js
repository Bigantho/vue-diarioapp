
import axios from 'axios'

const uploadImage = async (file ) => {
    if (!file) return 

    try {
        const formData = new FormData()
        formData.append('upload_preset', 'vue-curso')
        formData.append('file',file)
        const url = 'https://api.cloudinary.com/v1_1/dx0h0gg7z/image/upload'

        const {data} = await axios.post(url, formData)
        console.log(data);

        return data.secure_url
    } catch (error){
        console.log("Error al cargar la imagen, revisar logs")
        console.log(error)
        return null 
    }
}

export default uploadImage