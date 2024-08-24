import { Layout } from 'antd'
import React from 'react'
import MainLayout from '../layout/MainLayout'
import {
    userEducationMock,
    userExperienceMock,
    userMock,
} from '../mock/userMock'
import UserSection from '../components/common/UserSection'

const ProfilePage = () => {
    const experienceMock = userExperienceMock.find(
        (userExperience) => userExperience.id === userMock.experienceId
    )
    const educationMock = userEducationMock.find(
        (education) => education.id === userMock.educationId
    )

    return (
        <MainLayout>
            <div className="items-start gap-5 mt-2 h-full w-full overflow-auto no-scrollbar grid 2xl:grid-cols-12">
                <div className='flex-1 col-start-1 2xl:col-span-8 flex gap-1 flex-col'>
                    <div className="card card-compact bg-cardColor">
                        <figure className="max-h-48 relative pb-20">
                            <img
                                className="max-h-48 w-full object-cover"
                                src="https://static.vecteezy.com/system/resources/previews/003/423/831/original/cute-cat-kitten-greeting-cartoon-doodle-background-wallpaper-free-vector.jpg"
                                alt="Shoes"
                            />
                            <div className="avatar absolute left-5 bottom-0 w-32 h-32">
                                <img
                                    className="rounded-full border-black border-4"
                                    src={userMock.avatar}
                                    alt="user-avatar"
                                />
                            </div>
                        </figure>
                        <div className="p-5 pt-0">
                            <div className="user-overall flex items-center justify-between">
                                <div className="user-info">
                                    <p className="text-xl text-textColor font-bold ">
                                        {userMock.name}
                                    </p>
                                    <p>@{userMock.username}</p>
                                    <p className="text-textColor">
                                        {userMock.address}
                                    </p>
                                </div>
                                <div className="user-expertise flex gap-2 flex-col">
                                    <div className="user-experience flex gap-3 items-center font-semibold">
                                        <div>
                                            <img
                                                className="h-10 w-10 rounded-lg"
                                                src={experienceMock.avatar}
                                                alt="organize-avt"
                                            />
                                        </div>
                                        <p>{experienceMock.name}</p>
                                    </div>
                                    <div className="user-education flex gap-3 items-center font-semibold">
                                        <div>
                                            <img
                                                className="h-10 w-10 rounded-lg"
                                                src={educationMock.avatar}
                                                alt="school-avt"
                                            />
                                        </div>
                                        <p>{educationMock.name}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-textLinkColor font-semibold">
                                {userMock.connections} connections
                            </p>
                            <div className="actions mt-3 flex items-center gap-3">
                                <button className="btn btn-info rounded-full btn-sm text-base bg-btnLinkColor">
                                    Open to
                                </button>
                                <button className="btn btn-outline border-textLinkColor text-textLinkColor rounded-full btn-sm">
                                    Add profile section
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="posts"></div>
                    <div className="experience">
                        <UserSection
                            cardTitle="Experience"
                            title={experienceMock.role}
                            avatar={experienceMock.avatar}
                            primaryDescription={
                                <p className='flex gap-1 items-center'>
                                    <span>{experienceMock.name}</span>&#8226;
                                    <span>{experienceMock.level}</span>
                                </p>
                            }
                            moreInfos={[
                                <p>
                                    {experienceMock.startDate} -{' '}
                                    {experienceMock?.endDate || 'now'}
                                </p>,
                                <p>{experienceMock.address}</p>,
                            ]}
                        />
                    </div>
                    <div className="education">
                        <UserSection
                            cardTitle="Education"
                            title={educationMock.name}
                            primaryDescription={educationMock.description}
                            moreInfos={[
                                <p>
                                    {educationMock.startYear} -{' '}
                                    {educationMock.endYear}
                                </p>,
                            ]}
                        />
                    </div>
                    <div className="certificate"></div>
                </div>
                <div className="card w-96 bg-cardColor 2xl:col-start-9 2xl:col-end-13">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProfilePage
