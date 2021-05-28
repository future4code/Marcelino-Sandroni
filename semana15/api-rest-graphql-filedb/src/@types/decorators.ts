export const Get = (path: string) => {
  return <T extends new (...args: any[]) => any>(target: T) => {
    return class extends target {
      route = path
    }
  }
}

export const Post =
  (path: string) =>
  <T extends new (...args: any[]) => any>(target: T) =>
    class extends target {
      destination = path
    }
