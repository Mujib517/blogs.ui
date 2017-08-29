


export class BlogService{

    get(){
        let blogs=[{
            title:'My Angular blog',
            content:'Angular is pretty great technology',
            isPublished:true
        },
        {
            title:'My Angular2 blog',
            content:'Angular2 is pretty great technology.Better than predecessor',
            isPublished:true
        },
        {
            title:'My Angular4 blog',
            content:'Angular2 is pretty great technology.Better than predecessor',
            isPublished:false
        }];

        return blogs;
    }
}