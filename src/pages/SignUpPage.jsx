import { Button, Form, Input, Radio } from 'antd'
import { useState } from 'react'
import toast from 'react-hot-toast'

const SignUpPage = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        username: '',
        password: '',
        gender: '',
    })

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
    }

    return (
        <div className="flex-center flex-1 h-full">
            <Form
                className="min-w-[400px] p-6 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h1 className="text-4xl font-bold text-center mb-2 select-none">
                    Sign Up
                </h1>
                <p className="font-medium mb-3 text-center text-gray-500">
                    Join to keep track of your expenses
                </p>
                <Form.Item
                    label={<p className="form-label">Full Name</p>}
                    name="name"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
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
                            message: 'Please input your username!',
                        },
                    ]}
                    value={signUpData.name}
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
                            message: 'Please input your password!',
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
                            message: 'Please input your gender!',
                        },
                    ]}
                >
                    <Radio.Group onChange={handleOnChange} name="gender">
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black mt-3"
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
