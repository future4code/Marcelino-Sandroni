class Eitherlul<L, R> implements Eitherlul<L, R> {
    [Symbol.toStringTab]: 'EitherAsync' = 'EitherAsync'

    constructor(
        private runPrimise: (helpers: EitherAsyncHelper<L>) => PromiseLike<R>
    ){}

