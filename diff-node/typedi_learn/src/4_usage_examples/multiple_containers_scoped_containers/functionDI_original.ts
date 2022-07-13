// import { Service, Container } from 'typedi';

// export const PostRepository = Service(() => ({
//   getName() {
//     return 'hello from post repository';
//   },
// }));

// export const PostManager = Service(() => ({
//   getId() {
//     return 'some post id';
//   },
// }));

// export class PostQueryBuilder {
//   build() {
//     return 'SUPER * QUERY';
//   }
// }

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

// const postController = Container.get(PostController);
// console.log(postController);
