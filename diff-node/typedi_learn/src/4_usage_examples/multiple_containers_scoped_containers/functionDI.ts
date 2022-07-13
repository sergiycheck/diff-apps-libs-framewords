import { Service, Container } from 'typedi';

export const PostRepository = Service({
  factory: () => ({
    getName() {
      return 'hello from post repository';
    },
  }),
});

export const PostManager = Service({
  factory: () => ({
    getId() {
      return 'some post id';
    },
  }),
});

export class PostQueryBuilder {
  build() {
    return 'SUPER * QUERY';
  }
}

// TODO: don't know how to handler function DI
export const PostController = Service({
  factory:
    // [PostManager, PostRepository, PostQueryBuilder],
    (manager, repository, queryBuilder) => {
      return {
        id: manager.getId(),
        name: repository.getName(),
        query: queryBuilder.build(),
      };
    },
});

// export const PostController = Service(
//   [PostManager, PostRepository, PostQueryBuilder],
//   (manager, repository, queryBuilder) => {
//     return {
//       id: manager.getId(),
//       name: repository.getName(),
//       query: queryBuilder.build(),
//     };
//   }
// );

const postController = Container.get(PostController);
console.log(postController);
