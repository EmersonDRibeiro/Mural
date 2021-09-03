module.exports = { 

     posts: [
        {
            id: 'thisHasBeenID',
            title: 'thisIsAtitles', 
            description: 'thisIsADescription'
        },
    ],

    getAll(){
        return this.posts
    },

    newPosts(title, description){
        this.posts.push({id: generateID(), title, description})
    }


}


function generateID() {
    return Math.random(1).toString(36).substr(2)

}