import React from 'react'
import UserProfile from '../components/UserProfile'

const SiderLayout = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4 pb-4">
            <div className="card shadow-xl w-full bg-cardColor">
                <figure>
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADMQAAEEAgIABQMDAQgDAAAAAAEAAgMRBCESMQUTIkFRYXGRBjKBUhQzYqKxwfDxFSNT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACMRAAICAgICAwEBAQAAAAAAAAABAhEDIQQSEzEFQVEiMhT/2gAMAwEAAhEDEQA/APUBEagtKK1ZxQQC1Lo+QVo22mWx2jjCym6MqXH5bQWYm+rW8YLVPIpOWETJ2ZsePxFVSv5VC1oeVpUkj0ieJIqGKLZnHtDewu37e6acza5rQTXugUB8sUUjS8Gw2sxA8NHKTs/ytAw1sUlvB5mmPyD/AHg6+oWlwWyMqRxsuL+mZ+RGJInsPTgQV4vFy3E18Gl6/wAdy24eK5rKOQ9tRj4+p+gXjcXFc35790OSV1RfGhKMm/o2YpTQtNRyWkYIzq06xlBBRvTDiRc+U+yHWlUhQIq+Qk7VbtWDbV2s0oQGOlUlGc1Cc3ahCqkC1LW7TMMD5TUbST9lZTdC/FcnDhzg7hd+FyorsjP8QxBh5b4m/sPqb9lWMbT/AOoSBmMb7tjAP3spGE9LJKK7aHY2+iscgbaeYzSShdsJ5jlpxxBky/DSGWo16VXJ4oE4aQXge6K86Ssr6QtWFGdFXtHsgOPFc6WkvLOgaSCllbLueR+00flXOdllnFuRLXWnJES8nJmIWUNgal7IELnnk4Ek+5RmY++qTEbNI7Wo0RxQJkNInl0jBqmh17plAgC1Uc1PR43MW4gbUy4rQ30uI+qRPJFOjXj4uSaszQ1EaFErDE/ia+dLmORxqXoTOLg6ZYtsIRaj3pDcdouoFkQxGWVkYNcjX5Xp4YGRRhjBQC81BJ5czH/0uB/C9Uxwe0Ob0VU9JAL+myvBcrrkuwuqPE5j3yukkkNucbSsWqTWQeLePylmtSMcftnR5bj2Sj9DUcqbjlWcGO7aLCs17mn1Ck+MktGTpKro2GvtXOws6GcE6Np5j+QtOTsW0UkSORfstJ+wlZIbNKxcjHkLgCkMgv8AZegfi6SsuJpKlAp7MZjnirWriEkC0u7Gpybx4yyvhKWmHCLqzRiGkw3pLRPFaRuek5BhLUEofK1Bd3XZRWDRqg+kfZDeUCDIbwDZCA4fPSvJKxo5FzQK9lzskZJndxZIOKaYp4gajB/xJFkvSjOyfNeA2+DUoyTa04rjGmc3lSWTI3E0jJ6ULntB56UNdaepGOURlp5aOx8LSw82THFN4ln9JWZBs0tBkWkVpgqL9mh/5Zv/AMf8yhKeUuQ9UFUjGfRJtRGwE37Kj3bUxv8AT/KyznSN+CHeexk9IZNaPXuqGTSmOGXI/uo3OHyFz55XejuwxRUbkB5eXMW+3stDHlsLLzsTLimMkkL+AA2KIH3V8WYkCl0sOS47PPZ4RWRqHo3WnkLU0k45TW0QTUFo7GdoO5o90J7ARpR5yqZdq7B6is8dbVhtgXSu5bVQfQkzWzRh0miGu46RA5CaLRWhEhbRZpRAqNaitCJAlSLCFI3SZpClGkdA2Zs4pJlxa7SdyEiRtZ5DYhWSHoo7O6HaXiaS8NHutiCJsTQ0bPuflBLIoGnBxXnb/EVx2uBHJacfQSzdH1InNrTTekMc1mnJwui1saXIHmrkfkE+AxHN0hF7YzTukVztJXI2EmS7IXjk4StD2Bj/ANpyA2yGdleka1sTA1gAaNABed/Tw3NXdN/3XoI+gl48SjsPkcuU3X4XaCTqlg+P4bcV7cqBoDXmngdBy9CFm/qYtHhLr/dzbX/PtafZij7MBuRTaC4T2Vnc6Wr+n/DneJ5VE8Y2be76KvL+Gjxlo3lwsK7nOXtcfw7Ex2BscDNe5FlAzvCMfIYfLYI5PYt0mKT+ynjPIxsfIfSLP0TTcSQt2B+U9jYxjbxIogm02IlTyO9GvHxYdbkY3lEacCD9VYRrVkgDhRH8qnltAriPwr8tIH/kt+9GeGUrAUm5Yg5vpAB+iSJINH2TITUvRmzYHjewlaQpW6VrVXbTrMtbEJ2WkvLPLS1ntvSF5O0iSDQtjsqVjndBy1/L4mkmIq67RBklop4OvdJyY72jocLlRx3GX2Hd6UZkbQ2z2kDmMvW/umsWUSxgj7FK6NbNsuTGWkw9rle1KPqK8x485QHZpDkyA4WDay24+TI797QfhUkM+O6pQBaN4siVtFS4WSMbaPSeD5wxsi3n0OHFy9ZG4FoLTbSNFfOsWTS1cXLniAEMrmDuh0hWjBlxbPbNIva8t+pfEWZUrceB1xRklxHRd9Epk5uXOzhLO8s+AQLSRbQS5yf0Vjx07YF7gLA+V7X9Alpxcqv38xf2r/teKlanv094u7wfN5kcoX6kb9PkJCdSTZotNH1ILiksPxTCzIhJBkxkH2LqI+4VMzxXGhBEcjJJPYNNj+VtTT9APQKYNOVJx/q3+FfjpZ8Upc4vJtxNkpsTEigj8QceQq2EI1SoY1ALrs9IvmNpU4NBR5EfsXLFlSNpxWtkSAtoLLl0UeODWzNyeTGdRQEmiou1DqvalteyYZjqsqwbpXAVuKogF7dJScCq90+9ukq5luH3VMhbw7wibOcXB3CNvb+/4W1H4DDEPRNKH12aI/C0vD42xYcTW/0g/lMHpL9joxpWYR8PymmhJHQ+bXLYK5VSJ3n+nyyNwAodBdkRtyYjG7R7B+CqRHQRx0V6ecYuNP0e+nFNUzGx5HMkdG/tppa+MbaEjJj3mSH5r/RaGPCWgALzOSNSaR5XmxjGbSDuGkF3aaLDx2l5GG9JLRzgLhYQHstOMic5HZiuc4JUohKxGAFrgAtjFc4USNfKmPEbGNdojWub30hjyFB0a1w3NbY/FOKFG01HMsaV5q2K8E/z2t2PNGfoxZ8MsT2bzZLROVhZcU10mhL6U0xSthJnaWdO7aYlkSE77UsqMN2yvPaLG60jy2jRPpUmMH2oiXY9Fa5WQs5thBc0Cj7hMXa4tsKmWavhWYx8TYHOAe3oH3C0CaXlnMrY7VOUptpleW/HJLoPu6PQuzsZriDLRC5Y8eO8sFMXKFWfNMXxZkoaZBT/AH2tOPKa9vsT7ALIg8P+lWtTEg4EN+Fply8klTZ6PJ8pNxoexoS88jokrTix9IGMzjQWnANJKVnEy5nJ2wDsfSA/GWtw5C1HkqOAhS2IQ4vV6HynoYGN6ARY46CM1ulizQZ1eN1qxd8bHA62lZI6K0XjSUn7Cxyibk0lYhM3QQIx/wCw/dM5D+AKrhMBksp/Hi1s5/NyKVJDEWqKY830qMiM8W8dAWSSli5dCMtHKCPkSsjrKs5yE42rshRxXMfRVXKl0qslD0ciYY+1mCSkeGTaNOwWabCjtSLJEYSo6JYyRYVYog6Vo9yaQ2y3pEa7iQR2DaBotM9I1oY0NaNAKEKPKjkja4P42Ovhck0zXcT5nHDtFZHTldrfUjhiOhDmWZ6aCcgdSTApEjdRRJgGo16vySLZEVr9I0yhprlYvoJMyUqOmIGkqcL9GrFnUfY0+ShaSyZySKVHTE6JpAkP1tIWFJ2x+TlOSqICZ5c8kqsb3NPpeQPoVLhaq1m0TVGVu/Yz5j30S4lEbyKLjx8gNWnW4ZcLApMSsUzOc0ntULVqvwnAWlpYSBRUqiGe4UhkaR5GcShBhcaAtU9FqN+gB0rxv4mlzmkXYpDqiomRxofjlTDJLWawpmNyYpANDzXozHJNhTUIso7KSGOSlXDdLlRdHmYxtG6SrXogepZTQY9WqiTap5mqUIWg0hhr7RWuSbDRTIdpAnQTiFJsIb+lBeq870mdkA4nRsc9+jTfdH4R1XFv8qIAA13zaq++RtYc832pHd+OwQeO2rZD8dvbRSE1hDtpiM7CgHaZhbemL+QwQgriaWDFyorchxxxFrI8Nd6lvQn0BapaRyIoHJjNI/hZOZjhvS3rWZ4g70lLtsOSSPM5TacSgOlIbxCYyD6iknHaqStFQm4+ipJPailBKkIEW9khEBQwrgI0LY1jDkb+q1YI+kjhAWLWrDxCaikHEelCKC2lysM8b5XHShzDWk8+Laq2L2RdRSkZxa5WbbRRWkIB0VEmKPZA4joSQk02UYdLv7OR0rMjc3SVTsbKqBPdSGHqcgOFpIFwcqboGKtGjG+jY7RzMwt9XaWgs1au8IZQUvY/DyJ4f8nPmaDTdfJUMk9X0S79FVa/iaRQSitFZs2TM7ZtYk/BwW3Bmjjs0vJRyHsI7cpwTVJP2ZOrR6p+Y0t/cs3NygRQN6WUct3So6UuFlW2l6I0yszrJKVcUZxtCcEpsiQNSFB7UBAEFCv1tBuhapJPQtHFAS0akE9ABPwZC8mc6jV0movEKr1LbDC2jPLPFM9aMjS5ecHiOv3KVfhYXnRsEtcKcEqRwk43dLlyw4pPtR1eZjj41Kth27CnhalctLObEjy1R8ely5Aw7E54bSgg9S5chaQcWMMj4ilEoptrlyFon2Z80m1LDypcuQmiqQw2Olcs91y5Qzt7KHu1BkULkLDSRxeou1y5URkOCp0uXKC2CmfxCy8zMLG0O1C5buLFN7OZ8hklGGjMknkLr5EfZWilku+RXLl3MUUeelJ+7GhlSV+5cuXJ/ih+AeXJ+s//2Q=="
                        alt="background"
                        className="h-14 w-full object-cover"
                    />
                </figure>
                <div className="card-body py-5">
                    <h2 className="card-title">
                        <div className="avatar flex items-center gap-3">
                            <div className="w-[50px] h-[50px] rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="text-xl text-textColor">Daisy</p>
                                <p className="text-xs text-descriptionColor">
                                    @daisyy
                                </p>
                            </div>
                        </div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-outline btn-info rounded-full px-3 py-0">
                            <a href="/profile/:userId">My Profile</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card shadow-xl w-full bg-cardColor">
                <div className="card-body py-5">
                    <h2 className="card-title mb-3">Grow your network</h2>
                    <div className='flex flex-col gap-3'>
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                        <UserProfile />
                    </div>
                    <a href='/network' className='text-cyan-600'>Show more</a>
                </div>
            </div>
        </div>
    )
}

export default SiderLayout
