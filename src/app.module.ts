import {Module} from '@nestjs/common';
import {ProductsModule} from "./products/products.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot('mongodb://root:6B4Xmk4E9h@localhost:27017/products?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    ]
})
export class AppModule {
}
