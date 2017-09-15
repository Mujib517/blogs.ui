import { NgModule } from "@angular/core";
import { BlogService } from "./blog.service";
import { TimePipe } from "./time.pipe";
import { BlogResolver } from "./blog.resolver";
import { ShowDirective } from "./show.directive";
import { IfDirective } from "./if.directive";



@NgModule({
    providers: [BlogResolver],
    declarations: [TimePipe, ShowDirective, IfDirective],
    exports: [TimePipe, ShowDirective, IfDirective]
})
export class SharedModule { }