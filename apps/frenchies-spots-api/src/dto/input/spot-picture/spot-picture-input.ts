import { Field, InputType } from '@nestjs/graphql';
import { CategoriesSpotAndTag } from '@prisma/client';

import { TagEntity } from 'src/entity/tag.entity';
import { SpotPictureEntity } from '../../../entity/spot-picture.entity';
import { Column, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class SpotPictureInput {
  @Field()
  url: string;

  @Field({ nullable: true })
  hostId?: string;
}
