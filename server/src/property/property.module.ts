import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PropertyModuleBase } from "./base/property.module.base";
import { PropertyService } from "./property.service";
import { PropertyResolver } from "./property.resolver";

@Module({
  imports: [PropertyModuleBase, forwardRef(() => AuthModule)],
  providers: [PropertyService, PropertyResolver],
  exports: [PropertyService],
})
export class PropertyModule {}
