import { useMutation } from '@apollo/client'
import { Button, Form, Input, Radio } from 'antd'
import { useState } from 'react'
import { SIGN_UP } from '../graphql/mutations/user.mutation'
import '../assets/css/signUp.css'

const SignUpPage = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        gender: '',
    })

    const [signUp, { loading, error
     }] = useMutation(SIGN_UP)

    const handleOnChange = (e) => {
        const { id, value, type, name } = e.target
        if (type === 'radio' && id === undefined && name === 'gender')
            setSignUpData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        else {
            setSignUpData((prevData) => ({
                ...prevData,
                [id]: value,
            }))
        }
    }

    const handleSubmit = async () => {
        try {
            await signUp({
                variables: {
                    input: signUpData,
                },
            })
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    return (
        <div className="flex-center h-full">
            <Form
                className="min-w-[400px] p-6 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h1 className="text-4xl font-bold text-center select-none">
                    Sign Up
                </h1>
                <p className="font-medium text-center text-gray-500">
                    Join to join
                </p>
                <Form.Item
                    label={<p className="form-label">Full Name</p>}
                    name="name"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Enter your full name!',
                        },
                    ]}
                    value={signUpData.name}
                >
                    <Input onChange={handleOnChange} />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Username</p>}
                    name="username"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Enter your username!',
                        },
                    ]}
                    value={signUpData.name}
                >
                    <Input onChange={handleOnChange} />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Email</p>}
                    name="email"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Enter your email!',
                        },
                    ]}
                    value={signUpData.email}
                >
                    <Input onChange={handleOnChange} />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Password</p>}
                    name="password"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Enter your password!',
                        },
                    ]}
                    value={signUpData.name}
                >
                    <Input.Password onChange={handleOnChange} />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Gender</p>}
                    value={signUpData.name}
                    rules={[
                        {
                            required: true,
                            message: 'Enter your gender!',
                        },
                    ]}
                    className='mb-0'
                >
                    <Radio.Group onChange={handleOnChange} name="gender">
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <p className='text-red-600'>{error?.message || ''}</p>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black"
                        loading={loading}
                        disabled={loading}
                    >
                        Sign Up
                    </Button>
                </Form.Item>

                <p className="font-normal text-gray-400 text-center">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </Form>
        </div>
    )
}

export default SignUpPage
