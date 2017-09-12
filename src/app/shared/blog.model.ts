import { Comment } from './comment.model';

export class Blog {
    title: string;
    content: string;
    published: boolean;
    views: number;
    lastUpdated: Date;
    comments: Array<Comment>;
}