import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // 아래 내용들을 상속 받음
  // @Field(() => String)
  // name?: string
  //
  // @Field(() => String)
  // description?: string
  //
  // @Field(() => String)
  // price?: number
}

// PickType(CreateProductInput, ["name", "price"]) => 뽑기
// OmitType(CreateProductInput, ["description"]) => 빼기
// PartialType(CreateProductInput) => 물음표(있어도 되고 없어도 됨) 만들기

// RequiredType => 존재하지 않음