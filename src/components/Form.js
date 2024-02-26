import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value.length <= 150) {
            setFormState((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submit = async (e) => {
        e.preventDefault()
    
        const request = await fetch("https://mail-server-xi.vercel.app/mail-qaz", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState)
        })
        
        const res = await request.json()
        alert(res.message)

        setFormState({
            name: "",
            company: "",
            phone: "",
            message: "",
        })
    }

    const {t} = useTranslation()
    return (
        <div id='form' className='container mx-auto px-4 py-4'>
            <div className='bg-lightGray px-6 md:px-12 py-10 rounded-[30px]'>
                <h2 className='text-button font-medium text-4xl md:text-6xl'>{t('form.title')}</h2>
                <p className='text-button text-2xl mt-4 font-medium'>{t('form.subtitle')}</p>
                <form className='flex flex-col mt-8' onSubmit={submit}>
                    <input 
                        id='name'
                        name='name'
                        type='text'
                        autoFocus
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder={t('form.name')}
                        className='bg-transparent outline-none border-b border-lighterGray px-2 py-3 text-2xl'
                    />
                    <input 
                        id='email'
                        name='email'
                        type='text'
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder={t('form.email')}
                        className='bg-transparent outline-none border-b border-lighterGray px-2 py-3 text-2xl mt-6'
                    />
                    <input 
                        id='phone'
                        name='phone'
                        type='tel'
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder={t('form.phone')}
                        className='bg-transparent outline-none border-b border-lighterGray px-2 py-3 text-2xl mt-6'
                    />
                    <input 
                        id='message'
                        name='message'
                        type='text'
                        value={formState.message}
                        onChange={handleChange}
                        placeholder={t('form.message')}
                        className='bg-transparent outline-none border-b border-lighterGray px-2 py-3 text-2xl mt-6'
                    />
                    <button type='submit' className='bg-button text-xl px-6 py-4 rounded-[15px] text-white hover:bg-[#006087] mt-12'>
                        {t('form.send')}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form