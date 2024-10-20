import { Icon, IconProps } from "@chakra-ui/react";

export function FullIcon({ ...props }: IconProps) {
  return (
    <Icon viewBox="0 -960 960 960" {...props}>
      <path
        fill="currentColor"
        d="M160-120q-17 0-28.5-11.5T120-160v-240q0-17 11.5-28.5T160-440q17 0 28.5 11.5T200-400v144l504-504H560q-17 0-28.5-11.5T520-800q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-144L256-200h144q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H160Z"
      />
    </Icon>
  );
}

export function HomeIcon({ ...props }: IconProps) {
  return (
    <Icon viewBox="0 -960 960 960" {...props}>
      <path
        fill="currentColor"
        d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z"
      />
    </Icon>
  );
}

export function PlayIcon({ ...props }: IconProps) {
  return (
    <Icon viewBox="0 -960 960 960" {...props}>
      <path
        fill="currentColor"
        d="m426-330 195-125q14-9 14-25t-14-25L426-630q-15-10-30.5-1.5T380-605v250q0 18 15.5 26.5T426-330Zm54 250q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
      />
    </Icon>
  );
}
