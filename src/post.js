class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toStringW() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}