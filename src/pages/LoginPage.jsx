import { Button, Form, Input } from 'antd'
import { useState } from 'react'

const LoginPage = () => {
    const [logInData, setLogInData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setLogInData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSubmit = async () => {

    }

    return (
        <div className="flex-center flex-1 h-full">
            <Form
                className="min-w-[400px] p-8 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h1 className="text-4xl font-bold text-center mb-2 select-none">
                    Login
                </h1>
                <p className="font-medium mb-5 text-gray-500 text-center">
                    Welcome back! Log in to your account
                </p>
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
                >
                    <Input onChange={handleChange} />
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
                >
                    <Input.Password onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black mt-3"
                    >
                        Login
                    </Button>
                </Form.Item>

                <p className="font-normal text-gray-400 text-center">
                    {"Don't"} have an account? <a href="/sign-up">Sign Up</a>
                </p>
            </Form>
        </div>
    )
}

export default LoginPage
