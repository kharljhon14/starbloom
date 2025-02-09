import { faker } from '@faker-js/faker';
import { Post } from '../types/post';

export function createRandomPost(): Post {
  return {
    userID: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    createdAt: faker.date.past(),
    content: faker.lorem.paragraphs()
  };
}

export function createRandomPosts(count: number): Post[] {
  return faker.helpers.multiple(createRandomPost, { count });
}
