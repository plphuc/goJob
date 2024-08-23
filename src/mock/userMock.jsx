export const userMock = {
    name: "Phuc Pham",
    username: "daisyy",
    avatar: "https://i.pinimg.com/736x/e7/68/6b/e7686bb11e34d06514d88048f70d795b.jpg",
    cover: "https://c4.wallpaperflare.com/wallpaper/350/598/512/movie-whisper-of-the-heart-wallpaper-preview.jpg",
    description: "meow meow meow meow meoww...",
    address: "Ho Chi Minh City, Vietnam",
    contact: "",
    educationId: "1",
    experienceId: "1",
    certificates: [{
        name: "Google Data Analytics Specialization",
        organize: "Coursera",
        issuedAt: "02/2023",
        avatar: "https://software.centrix.asia/wp-content/uploads/2024/06/dieu_toi_hoc_duoc_tu_coursesa-1.png"
    },
    {
        name: "Databases and SQL for Data Science with Python",
        organize: "Coursera",
        issuedAt: "03/2023",
        avatar: "https://software.centrix.asia/wp-content/uploads/2024/06/dieu_toi_hoc_duoc_tu_coursesa-1.png"
    }],
    posts: ["1", "3"],
    connections: 139
}

export const userEducationMock = [{
    id: "1",
    startYear: "2019",
    endYear: "2023",
    role: "student",
    schoolId: "1",
    userId: "1",
    // temp part - will not be included in real data
    name: "University of Sciences, VNUHCM",
    avatar: "https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1607929454387-Z64LGZAMXVUKBRXCGC0X/35189853_2076230709311065_3947220011839389696_o.png?format=750w",
    description: "Bachelor's Degree, Data Science"
}]

export const userExperienceMock = [{
    id: "1",
    startDate: "12/04/2024",
    endDate: "",
    role: "Software Engineer",
    // temp part - will not be included in real data
    name: "LatekVN",
    address: "Ho Chi Minh City",
    avatar: "https://avatars.githubusercontent.com/u/172945772?s=200&v=4",
    level: "Intern"
}]