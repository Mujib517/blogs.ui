import { NgModule } from "@angular/core";
import { BlogService } from "./blog.service";
import { TimePipe } from "./time.pipe";
import { BlogResolver } from "./blog.resolver";



@NgModule({
    providers:[BlogResolver],
    declarations:[TimePipe],
    exports:[TimePipe]
})
export class SharedModule{}