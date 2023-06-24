const posts = require("../model/posts")

const addPost = async (bodyData) => {
    let response = {}
    try {
        let data = new posts(bodyData)

        data = await data.save()

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}

const fetchPost = async (location, duration, industry) => {

    let response = {}

    try {
        let query = {}
        console.log(location, duration, industry)

        if (location && location.length) {
            location = location.split(',')
            query = { ...query, location: { $in: location } }
        }

        if (duration && duration.length) {
            query = { ...query, duration: { $lte: duration } }
        }

        if (industry && industry.length) {
            query = { ...query, companyName: industry }
        }
        console.log("QUERy", query)


        const data = await posts.find(query)


        if (data) {
            console.log("data", data)
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}
module.exports = { addPost, fetchPost }