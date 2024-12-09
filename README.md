# tour-and-travel-server

user
tour
review

user{
    name
    email
    age
    photo
    role >> user >> admin
    status >> active >> inactive
}

tour{
    name
    duration
    rating
    price
    coverImage
    image
    startdate
    tourLocation
}

modules >> models {Schema then model} >> interfaces >> jod >> router >> services >>  {Main kaj hosse request and Responsse manage kora} >>