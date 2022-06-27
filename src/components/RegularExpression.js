import { Box, Grid } from '@mui/material'
import React from 'react'
import Controls from './control/Control'
import { useForm } from './useForm'


const initialFValues = {
    phoneNumber: '',
    whatsapp: '',
    username:'',
    email: '',
    password: '',
    url: '',
    tag: '',
}

const RegularExpression = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = (/^((0)?)(3)([0-9]{9})$/gm).test(fieldValues.phoneNumber) ? "" : "Phone number  must match the following pattern 03XXXXXXXXXX"
        if ('whatsapp' in fieldValues)
            temp.whatsapp = (/^(\+92)(3)([0-9]){9}$/gm).test(fieldValues.whatsapp) ? "" : "WhatsApp  must match the following pattern +923XXXXXXXXX"
        if ('username' in fieldValues)
            temp.username = (/^\w{5,10}$/gm).test(fieldValues.username) ? "" : "Username must be 5-10 characters long"
        if ('email' in fieldValues)
            temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(fieldValues.email) ? "" : "Email must be valid"
        if ('password' in fieldValues)
            temp.password = (/^[\w@-]{8}$/gm).test(fieldValues.password) ? "" : "Password must be 8 character can include @,-, or _"
        if ('url' in fieldValues)
            temp.url = (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig).test(fieldValues.url) ? "" : "URL must be valid"
        if ('tag' in fieldValues)
            temp.tag = (/^@[-\w\._]+$/gm).test(fieldValues.tag) ? "" : "Enter a valid Tag"

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleValidate,
        resetForm
    } = useForm(initialFValues, true, validate);


    const handleKeyType = e => {
        if (e.keyCode === 13) {
            handleSubmit(e)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validate()) {
            // onFinish()
        }
    }


    return (
        <Box sx={{ mt: 4 }}>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                alignContent="stretch"
                // wrap="nowrap"

            >
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="phoneNumber"
                        label="Pakistani Phone Number"
                        placeholder='03XX-XXXXXXX'
                        value={values.phoneNumber}
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.phoneNumber}
                        min={0}
                        max={11}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="whatsapp"
                        label="Pakistani WhatsApp"
                        placeholder='03XX-XXXXXXX'
                        value={values.whatsapp}
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.whatsapp}
                        min={0}
                        max={13}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="username"
                        label="Username"
                        value={values.username}
                        placeholder='Username must be 5-10 characters long'
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.username}
                        min={0}
                        max={10}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="email"
                        label="Email"
                        value={values.email}
                        placeholder='Email must be valid'
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.email}
                        // min={0}
                        // max={13}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="password"
                        label="Password"
                        value={values.password}
                        placeholder='Password must be 8 character long can include @,-, or _'
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.password}
                        min={0}
                        max={8}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="url"
                        label="URL"
                        value={values.url}
                        placeholder='URL must be valid'
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.url}
                   
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.TextInput
                        name="tag"
                        label="Tag"
                        value={values.tag}
                        placeholder='Tag a user'
                        onChange={handleInputChange}
                        onKeyDown={handleValidate}
                        onKeyUp={handleKeyType}
                        error={errors.tag}
                   
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default RegularExpression