import { NgModule } from "@angular/core";
import { BlogService } from "./blog.service";
import { TimePipe } from "./time.pipe";



@NgModule({
    providers:[BlogService],
    declarations:[TimePipe],
    exports:[TimePipe]
})
export class SharedModule{}