import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class PlaygroundResolver {
  @Query(() => String)
  hello() {
    return "GraphQL working";
  }
}
