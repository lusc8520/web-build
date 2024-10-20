import { createRouter, defineRoute, param } from "type-route";

export const basePath: string = "/web-build";

const baseRoute = defineRoute(basePath);

export const { RouteProvider, useRoute, routes } = createRouter({
  home: baseRoute.extend("/home"),
  cars: baseRoute.extend("/cars"),
  game: baseRoute.extend(
    {
      game: param.path.string,
    },
    (p) => `/game/${p.game}`,
  ),
});
