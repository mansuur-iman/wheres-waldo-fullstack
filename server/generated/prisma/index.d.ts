
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Field
 * 
 */
export type Field = $Result.DefaultSelection<Prisma.$FieldPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model LeaderBoard
 * 
 */
export type LeaderBoard = $Result.DefaultSelection<Prisma.$LeaderBoardPayload>
/**
 * Model UserFieldProgress
 * 
 */
export type UserFieldProgress = $Result.DefaultSelection<Prisma.$UserFieldProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.FieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderBoard`: Exposes CRUD operations for the **LeaderBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderBoards
    * const leaderBoards = await prisma.leaderBoard.findMany()
    * ```
    */
  get leaderBoard(): Prisma.LeaderBoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFieldProgress`: Exposes CRUD operations for the **UserFieldProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFieldProgresses
    * const userFieldProgresses = await prisma.userFieldProgress.findMany()
    * ```
    */
  get userFieldProgress(): Prisma.UserFieldProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Field: 'Field',
    Image: 'Image',
    Character: 'Character',
    LeaderBoard: 'LeaderBoard',
    UserFieldProgress: 'UserFieldProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "field" | "image" | "character" | "leaderBoard" | "userFieldProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Field: {
        payload: Prisma.$FieldPayload<ExtArgs>
        fields: Prisma.FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findFirst: {
            args: Prisma.FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findMany: {
            args: Prisma.FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          create: {
            args: Prisma.FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          createMany: {
            args: Prisma.FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          delete: {
            args: Prisma.FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          update: {
            args: Prisma.FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          deleteMany: {
            args: Prisma.FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          upsert: {
            args: Prisma.FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      LeaderBoard: {
        payload: Prisma.$LeaderBoardPayload<ExtArgs>
        fields: Prisma.LeaderBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findFirst: {
            args: Prisma.LeaderBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findMany: {
            args: Prisma.LeaderBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          create: {
            args: Prisma.LeaderBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          createMany: {
            args: Prisma.LeaderBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          delete: {
            args: Prisma.LeaderBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          update: {
            args: Prisma.LeaderBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          aggregate: {
            args: Prisma.LeaderBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderBoard>
          }
          groupBy: {
            args: Prisma.LeaderBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderBoardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardCountAggregateOutputType> | number
          }
        }
      }
      UserFieldProgress: {
        payload: Prisma.$UserFieldProgressPayload<ExtArgs>
        fields: Prisma.UserFieldProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFieldProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFieldProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          findFirst: {
            args: Prisma.UserFieldProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFieldProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          findMany: {
            args: Prisma.UserFieldProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>[]
          }
          create: {
            args: Prisma.UserFieldProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          createMany: {
            args: Prisma.UserFieldProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFieldProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>[]
          }
          delete: {
            args: Prisma.UserFieldProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          update: {
            args: Prisma.UserFieldProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserFieldProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFieldProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFieldProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserFieldProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFieldProgressPayload>
          }
          aggregate: {
            args: Prisma.UserFieldProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFieldProgress>
          }
          groupBy: {
            args: Prisma.UserFieldProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFieldProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFieldProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserFieldProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    field?: FieldOmit
    image?: ImageOmit
    character?: CharacterOmit
    leaderBoard?: LeaderBoardOmit
    userFieldProgress?: UserFieldProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scores: number
    userProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | UserCountOutputTypeCountScoresArgs
    userProgress?: boolean | UserCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldProgressWhereInput
  }


  /**
   * Count Type FieldCountOutputType
   */

  export type FieldCountOutputType = {
    images: number
    scores: number
    fieldProgress: number
    characters: number
  }

  export type FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | FieldCountOutputTypeCountImagesArgs
    scores?: boolean | FieldCountOutputTypeCountScoresArgs
    fieldProgress?: boolean | FieldCountOutputTypeCountFieldProgressArgs
    characters?: boolean | FieldCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCountOutputType
     */
    select?: FieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountFieldProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldProgressWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    characters: number
    imageProgress: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | ImageCountOutputTypeCountCharactersArgs
    imageProgress?: boolean | ImageCountOutputTypeCountImageProgressArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountImageProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    scores?: boolean | User$scoresArgs<ExtArgs>
    userProgress?: boolean | User$userProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | User$scoresArgs<ExtArgs>
    userProgress?: boolean | User$userProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      scores: Prisma.$LeaderBoardPayload<ExtArgs>[]
      userProgress: Prisma.$UserFieldProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends User$scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends User$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.scores
   */
  export type User$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    cursor?: LeaderBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * User.userProgress
   */
  export type User$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    where?: UserFieldProgressWhereInput
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    cursor?: UserFieldProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnailUrl: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnailUrl: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    name: number
    thumbnailUrl: number
    description: number
    createdAt: number
    _all: number
  }


  export type FieldMinAggregateInputType = {
    id?: true
    name?: true
    thumbnailUrl?: true
    description?: true
    createdAt?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    name?: true
    thumbnailUrl?: true
    description?: true
    createdAt?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    name?: true
    thumbnailUrl?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Field to aggregate.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithAggregationInput | FieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt: Date
    _count: FieldCountAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    description?: boolean
    createdAt?: boolean
    images?: boolean | Field$imagesArgs<ExtArgs>
    scores?: boolean | Field$scoresArgs<ExtArgs>
    fieldProgress?: boolean | Field$fieldProgressArgs<ExtArgs>
    characters?: boolean | Field$charactersArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["field"]>

  export type FieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["field"]>

  export type FieldSelectScalar = {
    id?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "thumbnailUrl" | "description" | "createdAt", ExtArgs["result"]["field"]>
  export type FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Field$imagesArgs<ExtArgs>
    scores?: boolean | Field$scoresArgs<ExtArgs>
    fieldProgress?: boolean | Field$fieldProgressArgs<ExtArgs>
    characters?: boolean | Field$charactersArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Field"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      scores: Prisma.$LeaderBoardPayload<ExtArgs>[]
      fieldProgress: Prisma.$UserFieldProgressPayload<ExtArgs>[]
      characters: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      thumbnailUrl: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["field"]>
    composites: {}
  }

  type FieldGetPayload<S extends boolean | null | undefined | FieldDefaultArgs> = $Result.GetResult<Prisma.$FieldPayload, S>

  type FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCountAggregateInputType | true
    }

  export interface FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Field'], meta: { name: 'Field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {FieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldFindUniqueArgs>(args: SelectSubset<T, FieldFindUniqueArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldFindFirstArgs>(args?: SelectSubset<T, FieldFindFirstArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldFindManyArgs>(args?: SelectSubset<T, FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Field.
     * @param {FieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
     */
    create<T extends FieldCreateArgs>(args: SelectSubset<T, FieldCreateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {FieldCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldCreateManyArgs>(args?: SelectSubset<T, FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {FieldCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Field.
     * @param {FieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
     */
    delete<T extends FieldDeleteArgs>(args: SelectSubset<T, FieldDeleteArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Field.
     * @param {FieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldUpdateArgs>(args: SelectSubset<T, FieldUpdateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {FieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldDeleteManyArgs>(args?: SelectSubset<T, FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldUpdateManyArgs>(args: SelectSubset<T, FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {FieldUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Field.
     * @param {FieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
     */
    upsert<T extends FieldUpsertArgs>(args: SelectSubset<T, FieldUpsertArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends FieldCountArgs>(
      args?: Subset<T, FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldGroupByArgs['orderBy'] }
        : { orderBy?: FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Field model
   */
  readonly fields: FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Field$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Field$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends Field$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Field$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fieldProgress<T extends Field$fieldProgressArgs<ExtArgs> = {}>(args?: Subset<T, Field$fieldProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    characters<T extends Field$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Field$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Field model
   */
  interface FieldFieldRefs {
    readonly id: FieldRef<"Field", 'String'>
    readonly name: FieldRef<"Field", 'String'>
    readonly thumbnailUrl: FieldRef<"Field", 'String'>
    readonly description: FieldRef<"Field", 'String'>
    readonly createdAt: FieldRef<"Field", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Field findUnique
   */
  export type FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findUniqueOrThrow
   */
  export type FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findFirst
   */
  export type FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findFirstOrThrow
   */
  export type FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findMany
   */
  export type FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Fields to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field create
   */
  export type FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Field.
     */
    data: XOR<FieldCreateInput, FieldUncheckedCreateInput>
  }

  /**
   * Field createMany
   */
  export type FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Field createManyAndReturn
   */
  export type FieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Field update
   */
  export type FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Field.
     */
    data: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
    /**
     * Choose, which Field to update.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field updateMany
   */
  export type FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
  }

  /**
   * Field updateManyAndReturn
   */
  export type FieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
  }

  /**
   * Field upsert
   */
  export type FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Field to update in case it exists.
     */
    where: FieldWhereUniqueInput
    /**
     * In case the Field found by the `where` argument doesn't exist, create a new Field with this data.
     */
    create: XOR<FieldCreateInput, FieldUncheckedCreateInput>
    /**
     * In case the Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
  }

  /**
   * Field delete
   */
  export type FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter which Field to delete.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field deleteMany
   */
  export type FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fields to delete
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to delete.
     */
    limit?: number
  }

  /**
   * Field.images
   */
  export type Field$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Field.scores
   */
  export type Field$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    cursor?: LeaderBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * Field.fieldProgress
   */
  export type Field$fieldProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    where?: UserFieldProgressWhereInput
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    cursor?: UserFieldProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * Field.characters
   */
  export type Field$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Field without action
   */
  export type FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ImageSumAggregateOutputType = {
    order: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    order: number
    fieldId: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    order?: true
  }

  export type ImageSumAggregateInputType = {
    order?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    fieldId?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    fieldId?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    fieldId?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    imageUrl: string
    order: number
    fieldId: string
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    fieldId?: boolean
    createdAt?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
    characters?: boolean | Image$charactersArgs<ExtArgs>
    imageProgress?: boolean | Image$imageProgressArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    fieldId?: boolean
    createdAt?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    fieldId?: boolean
    createdAt?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    fieldId?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "order" | "fieldId" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
    characters?: boolean | Image$charactersArgs<ExtArgs>
    imageProgress?: boolean | Image$imageProgressArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs>
      characters: Prisma.$CharacterPayload<ExtArgs>[]
      imageProgress: Prisma.$UserFieldProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      order: number
      fieldId: string
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    characters<T extends Image$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Image$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imageProgress<T extends Image$imageProgressArgs<ExtArgs> = {}>(args?: Subset<T, Image$imageProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly imageUrl: FieldRef<"Image", 'String'>
    readonly order: FieldRef<"Image", 'Int'>
    readonly fieldId: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.characters
   */
  export type Image$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Image.imageProgress
   */
  export type Image$imageProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    where?: UserFieldProgressWhereInput
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    cursor?: UserFieldProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CharacterSumAggregateOutputType = {
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    name: string | null
    fieldId: string | null
    imageId: string | null
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fieldId: string | null
    imageId: string | null
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    fieldId: number
    imageId: number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CharacterSumAggregateInputType = {
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    fieldId?: true
    imageId?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    fieldId?: true
    imageId?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    fieldId?: true
    imageId?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    name: string
    fieldId: string
    imageId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fieldId?: boolean
    imageId?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fieldId?: boolean
    imageId?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fieldId?: boolean
    imageId?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    fieldId?: boolean
    imageId?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fieldId" | "imageId" | "xMin" | "xMax" | "yMin" | "yMax", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Field?: boolean | FieldDefaultArgs<ExtArgs>
    Image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      Field: Prisma.$FieldPayload<ExtArgs>
      Image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fieldId: string
      imageId: string
      xMin: number
      xMax: number
      yMin: number
      yMax: number
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly fieldId: FieldRef<"Character", 'String'>
    readonly imageId: FieldRef<"Character", 'String'>
    readonly xMin: FieldRef<"Character", 'Float'>
    readonly xMax: FieldRef<"Character", 'Float'>
    readonly yMin: FieldRef<"Character", 'Float'>
    readonly yMax: FieldRef<"Character", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model LeaderBoard
   */

  export type AggregateLeaderBoard = {
    _count: LeaderBoardCountAggregateOutputType | null
    _avg: LeaderBoardAvgAggregateOutputType | null
    _sum: LeaderBoardSumAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  export type LeaderBoardAvgAggregateOutputType = {
    timeTaken: number | null
  }

  export type LeaderBoardSumAggregateOutputType = {
    timeTaken: number | null
  }

  export type LeaderBoardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    timeTaken: number | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type LeaderBoardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    timeTaken: number | null
    fieldId: string | null
    createdAt: Date | null
  }

  export type LeaderBoardCountAggregateOutputType = {
    id: number
    userId: number
    timeTaken: number
    fieldId: number
    createdAt: number
    _all: number
  }


  export type LeaderBoardAvgAggregateInputType = {
    timeTaken?: true
  }

  export type LeaderBoardSumAggregateInputType = {
    timeTaken?: true
  }

  export type LeaderBoardMinAggregateInputType = {
    id?: true
    userId?: true
    timeTaken?: true
    fieldId?: true
    createdAt?: true
  }

  export type LeaderBoardMaxAggregateInputType = {
    id?: true
    userId?: true
    timeTaken?: true
    fieldId?: true
    createdAt?: true
  }

  export type LeaderBoardCountAggregateInputType = {
    id?: true
    userId?: true
    timeTaken?: true
    fieldId?: true
    createdAt?: true
    _all?: true
  }

  export type LeaderBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoard to aggregate.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderBoards
    **/
    _count?: true | LeaderBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderBoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderBoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type GetLeaderBoardAggregateType<T extends LeaderBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderBoard[P]>
      : GetScalarType<T[P], AggregateLeaderBoard[P]>
  }




  export type LeaderBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithAggregationInput | LeaderBoardOrderByWithAggregationInput[]
    by: LeaderBoardScalarFieldEnum[] | LeaderBoardScalarFieldEnum
    having?: LeaderBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderBoardCountAggregateInputType | true
    _avg?: LeaderBoardAvgAggregateInputType
    _sum?: LeaderBoardSumAggregateInputType
    _min?: LeaderBoardMinAggregateInputType
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type LeaderBoardGroupByOutputType = {
    id: string
    userId: string
    timeTaken: number
    fieldId: string
    createdAt: Date
    _count: LeaderBoardCountAggregateOutputType | null
    _avg: LeaderBoardAvgAggregateOutputType | null
    _sum: LeaderBoardSumAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  type GetLeaderBoardGroupByPayload<T extends LeaderBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timeTaken?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timeTaken?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timeTaken?: boolean
    fieldId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectScalar = {
    id?: boolean
    userId?: boolean
    timeTaken?: boolean
    fieldId?: boolean
    createdAt?: boolean
  }

  export type LeaderBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timeTaken" | "fieldId" | "createdAt", ExtArgs["result"]["leaderBoard"]>
  export type LeaderBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type LeaderBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type LeaderBoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $LeaderBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderBoard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      timeTaken: number
      fieldId: string
      createdAt: Date
    }, ExtArgs["result"]["leaderBoard"]>
    composites: {}
  }

  type LeaderBoardGetPayload<S extends boolean | null | undefined | LeaderBoardDefaultArgs> = $Result.GetResult<Prisma.$LeaderBoardPayload, S>

  type LeaderBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderBoardCountAggregateInputType | true
    }

  export interface LeaderBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderBoard'], meta: { name: 'LeaderBoard' } }
    /**
     * Find zero or one LeaderBoard that matches the filter.
     * @param {LeaderBoardFindUniqueArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderBoardFindUniqueArgs>(args: SelectSubset<T, LeaderBoardFindUniqueArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderBoardFindUniqueOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderBoardFindFirstArgs>(args?: SelectSubset<T, LeaderBoardFindFirstArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany()
     * 
     * // Get first 10 LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderBoardFindManyArgs>(args?: SelectSubset<T, LeaderBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderBoard.
     * @param {LeaderBoardCreateArgs} args - Arguments to create a LeaderBoard.
     * @example
     * // Create one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.create({
     *   data: {
     *     // ... data to create a LeaderBoard
     *   }
     * })
     * 
     */
    create<T extends LeaderBoardCreateArgs>(args: SelectSubset<T, LeaderBoardCreateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderBoards.
     * @param {LeaderBoardCreateManyArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderBoardCreateManyArgs>(args?: SelectSubset<T, LeaderBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderBoards and returns the data saved in the database.
     * @param {LeaderBoardCreateManyAndReturnArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderBoard.
     * @param {LeaderBoardDeleteArgs} args - Arguments to delete one LeaderBoard.
     * @example
     * // Delete one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.delete({
     *   where: {
     *     // ... filter to delete one LeaderBoard
     *   }
     * })
     * 
     */
    delete<T extends LeaderBoardDeleteArgs>(args: SelectSubset<T, LeaderBoardDeleteArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderBoard.
     * @param {LeaderBoardUpdateArgs} args - Arguments to update one LeaderBoard.
     * @example
     * // Update one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderBoardUpdateArgs>(args: SelectSubset<T, LeaderBoardUpdateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderBoards.
     * @param {LeaderBoardDeleteManyArgs} args - Arguments to filter LeaderBoards to delete.
     * @example
     * // Delete a few LeaderBoards
     * const { count } = await prisma.leaderBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderBoardDeleteManyArgs>(args?: SelectSubset<T, LeaderBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderBoardUpdateManyArgs>(args: SelectSubset<T, LeaderBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards and returns the data updated in the database.
     * @param {LeaderBoardUpdateManyAndReturnArgs} args - Arguments to update many LeaderBoards.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderBoard.
     * @param {LeaderBoardUpsertArgs} args - Arguments to update or create a LeaderBoard.
     * @example
     * // Update or create a LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.upsert({
     *   create: {
     *     // ... data to create a LeaderBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderBoard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderBoardUpsertArgs>(args: SelectSubset<T, LeaderBoardUpsertArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardCountArgs} args - Arguments to filter LeaderBoards to count.
     * @example
     * // Count the number of LeaderBoards
     * const count = await prisma.leaderBoard.count({
     *   where: {
     *     // ... the filter for the LeaderBoards we want to count
     *   }
     * })
    **/
    count<T extends LeaderBoardCountArgs>(
      args?: Subset<T, LeaderBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderBoardAggregateArgs>(args: Subset<T, LeaderBoardAggregateArgs>): Prisma.PrismaPromise<GetLeaderBoardAggregateType<T>>

    /**
     * Group by LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderBoardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderBoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderBoard model
   */
  readonly fields: LeaderBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderBoard model
   */
  interface LeaderBoardFieldRefs {
    readonly id: FieldRef<"LeaderBoard", 'String'>
    readonly userId: FieldRef<"LeaderBoard", 'String'>
    readonly timeTaken: FieldRef<"LeaderBoard", 'Int'>
    readonly fieldId: FieldRef<"LeaderBoard", 'String'>
    readonly createdAt: FieldRef<"LeaderBoard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaderBoard findUnique
   */
  export type LeaderBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findUniqueOrThrow
   */
  export type LeaderBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findFirst
   */
  export type LeaderBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findFirstOrThrow
   */
  export type LeaderBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findMany
   */
  export type LeaderBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter, which LeaderBoards to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard create
   */
  export type LeaderBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaderBoard.
     */
    data: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
  }

  /**
   * LeaderBoard createMany
   */
  export type LeaderBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderBoard createManyAndReturn
   */
  export type LeaderBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderBoard update
   */
  export type LeaderBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaderBoard.
     */
    data: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
    /**
     * Choose, which LeaderBoard to update.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard updateMany
   */
  export type LeaderBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
  }

  /**
   * LeaderBoard updateManyAndReturn
   */
  export type LeaderBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderBoard upsert
   */
  export type LeaderBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaderBoard to update in case it exists.
     */
    where: LeaderBoardWhereUniqueInput
    /**
     * In case the LeaderBoard found by the `where` argument doesn't exist, create a new LeaderBoard with this data.
     */
    create: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
    /**
     * In case the LeaderBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
  }

  /**
   * LeaderBoard delete
   */
  export type LeaderBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
    /**
     * Filter which LeaderBoard to delete.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard deleteMany
   */
  export type LeaderBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoards to delete
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to delete.
     */
    limit?: number
  }

  /**
   * LeaderBoard without action
   */
  export type LeaderBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderBoardInclude<ExtArgs> | null
  }


  /**
   * Model UserFieldProgress
   */

  export type AggregateUserFieldProgress = {
    _count: UserFieldProgressCountAggregateOutputType | null
    _min: UserFieldProgressMinAggregateOutputType | null
    _max: UserFieldProgressMaxAggregateOutputType | null
  }

  export type UserFieldProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fieldId: string | null
    currentImageId: string | null
    startedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type UserFieldProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fieldId: string | null
    currentImageId: string | null
    startedAt: Date | null
    completedAt: Date | null
    updatedAt: Date | null
    completed: boolean | null
  }

  export type UserFieldProgressCountAggregateOutputType = {
    id: number
    userId: number
    fieldId: number
    currentImageId: number
    startedAt: number
    completedAt: number
    updatedAt: number
    completed: number
    foundCharacters: number
    _all: number
  }


  export type UserFieldProgressMinAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    currentImageId?: true
    startedAt?: true
    completedAt?: true
    updatedAt?: true
    completed?: true
  }

  export type UserFieldProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    currentImageId?: true
    startedAt?: true
    completedAt?: true
    updatedAt?: true
    completed?: true
  }

  export type UserFieldProgressCountAggregateInputType = {
    id?: true
    userId?: true
    fieldId?: true
    currentImageId?: true
    startedAt?: true
    completedAt?: true
    updatedAt?: true
    completed?: true
    foundCharacters?: true
    _all?: true
  }

  export type UserFieldProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFieldProgress to aggregate.
     */
    where?: UserFieldProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldProgresses to fetch.
     */
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFieldProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFieldProgresses
    **/
    _count?: true | UserFieldProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFieldProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFieldProgressMaxAggregateInputType
  }

  export type GetUserFieldProgressAggregateType<T extends UserFieldProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFieldProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFieldProgress[P]>
      : GetScalarType<T[P], AggregateUserFieldProgress[P]>
  }




  export type UserFieldProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFieldProgressWhereInput
    orderBy?: UserFieldProgressOrderByWithAggregationInput | UserFieldProgressOrderByWithAggregationInput[]
    by: UserFieldProgressScalarFieldEnum[] | UserFieldProgressScalarFieldEnum
    having?: UserFieldProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFieldProgressCountAggregateInputType | true
    _min?: UserFieldProgressMinAggregateInputType
    _max?: UserFieldProgressMaxAggregateInputType
  }

  export type UserFieldProgressGroupByOutputType = {
    id: string
    userId: string
    fieldId: string
    currentImageId: string | null
    startedAt: Date
    completedAt: Date | null
    updatedAt: Date
    completed: boolean
    foundCharacters: string[]
    _count: UserFieldProgressCountAggregateOutputType | null
    _min: UserFieldProgressMinAggregateOutputType | null
    _max: UserFieldProgressMaxAggregateOutputType | null
  }

  type GetUserFieldProgressGroupByPayload<T extends UserFieldProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFieldProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFieldProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFieldProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserFieldProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserFieldProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    currentImageId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    foundCharacters?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldProgress"]>

  export type UserFieldProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    currentImageId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    foundCharacters?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldProgress"]>

  export type UserFieldProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    currentImageId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    foundCharacters?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }, ExtArgs["result"]["userFieldProgress"]>

  export type UserFieldProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    fieldId?: boolean
    currentImageId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    updatedAt?: boolean
    completed?: boolean
    foundCharacters?: boolean
  }

  export type UserFieldProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fieldId" | "currentImageId" | "startedAt" | "completedAt" | "updatedAt" | "completed" | "foundCharacters", ExtArgs["result"]["userFieldProgress"]>
  export type UserFieldProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }
  export type UserFieldProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }
  export type UserFieldProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
    image?: boolean | UserFieldProgress$imageArgs<ExtArgs>
  }

  export type $UserFieldProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFieldProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fieldId: string
      currentImageId: string | null
      startedAt: Date
      completedAt: Date | null
      updatedAt: Date
      completed: boolean
      foundCharacters: string[]
    }, ExtArgs["result"]["userFieldProgress"]>
    composites: {}
  }

  type UserFieldProgressGetPayload<S extends boolean | null | undefined | UserFieldProgressDefaultArgs> = $Result.GetResult<Prisma.$UserFieldProgressPayload, S>

  type UserFieldProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFieldProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFieldProgressCountAggregateInputType | true
    }

  export interface UserFieldProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFieldProgress'], meta: { name: 'UserFieldProgress' } }
    /**
     * Find zero or one UserFieldProgress that matches the filter.
     * @param {UserFieldProgressFindUniqueArgs} args - Arguments to find a UserFieldProgress
     * @example
     * // Get one UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFieldProgressFindUniqueArgs>(args: SelectSubset<T, UserFieldProgressFindUniqueArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFieldProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFieldProgressFindUniqueOrThrowArgs} args - Arguments to find a UserFieldProgress
     * @example
     * // Get one UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFieldProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFieldProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFieldProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressFindFirstArgs} args - Arguments to find a UserFieldProgress
     * @example
     * // Get one UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFieldProgressFindFirstArgs>(args?: SelectSubset<T, UserFieldProgressFindFirstArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFieldProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressFindFirstOrThrowArgs} args - Arguments to find a UserFieldProgress
     * @example
     * // Get one UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFieldProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFieldProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFieldProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFieldProgresses
     * const userFieldProgresses = await prisma.userFieldProgress.findMany()
     * 
     * // Get first 10 UserFieldProgresses
     * const userFieldProgresses = await prisma.userFieldProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFieldProgressWithIdOnly = await prisma.userFieldProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFieldProgressFindManyArgs>(args?: SelectSubset<T, UserFieldProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFieldProgress.
     * @param {UserFieldProgressCreateArgs} args - Arguments to create a UserFieldProgress.
     * @example
     * // Create one UserFieldProgress
     * const UserFieldProgress = await prisma.userFieldProgress.create({
     *   data: {
     *     // ... data to create a UserFieldProgress
     *   }
     * })
     * 
     */
    create<T extends UserFieldProgressCreateArgs>(args: SelectSubset<T, UserFieldProgressCreateArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFieldProgresses.
     * @param {UserFieldProgressCreateManyArgs} args - Arguments to create many UserFieldProgresses.
     * @example
     * // Create many UserFieldProgresses
     * const userFieldProgress = await prisma.userFieldProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFieldProgressCreateManyArgs>(args?: SelectSubset<T, UserFieldProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFieldProgresses and returns the data saved in the database.
     * @param {UserFieldProgressCreateManyAndReturnArgs} args - Arguments to create many UserFieldProgresses.
     * @example
     * // Create many UserFieldProgresses
     * const userFieldProgress = await prisma.userFieldProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFieldProgresses and only return the `id`
     * const userFieldProgressWithIdOnly = await prisma.userFieldProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFieldProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFieldProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFieldProgress.
     * @param {UserFieldProgressDeleteArgs} args - Arguments to delete one UserFieldProgress.
     * @example
     * // Delete one UserFieldProgress
     * const UserFieldProgress = await prisma.userFieldProgress.delete({
     *   where: {
     *     // ... filter to delete one UserFieldProgress
     *   }
     * })
     * 
     */
    delete<T extends UserFieldProgressDeleteArgs>(args: SelectSubset<T, UserFieldProgressDeleteArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFieldProgress.
     * @param {UserFieldProgressUpdateArgs} args - Arguments to update one UserFieldProgress.
     * @example
     * // Update one UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFieldProgressUpdateArgs>(args: SelectSubset<T, UserFieldProgressUpdateArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFieldProgresses.
     * @param {UserFieldProgressDeleteManyArgs} args - Arguments to filter UserFieldProgresses to delete.
     * @example
     * // Delete a few UserFieldProgresses
     * const { count } = await prisma.userFieldProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFieldProgressDeleteManyArgs>(args?: SelectSubset<T, UserFieldProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFieldProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFieldProgresses
     * const userFieldProgress = await prisma.userFieldProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFieldProgressUpdateManyArgs>(args: SelectSubset<T, UserFieldProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFieldProgresses and returns the data updated in the database.
     * @param {UserFieldProgressUpdateManyAndReturnArgs} args - Arguments to update many UserFieldProgresses.
     * @example
     * // Update many UserFieldProgresses
     * const userFieldProgress = await prisma.userFieldProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFieldProgresses and only return the `id`
     * const userFieldProgressWithIdOnly = await prisma.userFieldProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFieldProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFieldProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFieldProgress.
     * @param {UserFieldProgressUpsertArgs} args - Arguments to update or create a UserFieldProgress.
     * @example
     * // Update or create a UserFieldProgress
     * const userFieldProgress = await prisma.userFieldProgress.upsert({
     *   create: {
     *     // ... data to create a UserFieldProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFieldProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserFieldProgressUpsertArgs>(args: SelectSubset<T, UserFieldProgressUpsertArgs<ExtArgs>>): Prisma__UserFieldProgressClient<$Result.GetResult<Prisma.$UserFieldProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFieldProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressCountArgs} args - Arguments to filter UserFieldProgresses to count.
     * @example
     * // Count the number of UserFieldProgresses
     * const count = await prisma.userFieldProgress.count({
     *   where: {
     *     // ... the filter for the UserFieldProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserFieldProgressCountArgs>(
      args?: Subset<T, UserFieldProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFieldProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFieldProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFieldProgressAggregateArgs>(args: Subset<T, UserFieldProgressAggregateArgs>): Prisma.PrismaPromise<GetUserFieldProgressAggregateType<T>>

    /**
     * Group by UserFieldProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFieldProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFieldProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFieldProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserFieldProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFieldProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFieldProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFieldProgress model
   */
  readonly fields: UserFieldProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFieldProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFieldProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends UserFieldProgress$imageArgs<ExtArgs> = {}>(args?: Subset<T, UserFieldProgress$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFieldProgress model
   */
  interface UserFieldProgressFieldRefs {
    readonly id: FieldRef<"UserFieldProgress", 'String'>
    readonly userId: FieldRef<"UserFieldProgress", 'String'>
    readonly fieldId: FieldRef<"UserFieldProgress", 'String'>
    readonly currentImageId: FieldRef<"UserFieldProgress", 'String'>
    readonly startedAt: FieldRef<"UserFieldProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserFieldProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserFieldProgress", 'DateTime'>
    readonly completed: FieldRef<"UserFieldProgress", 'Boolean'>
    readonly foundCharacters: FieldRef<"UserFieldProgress", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * UserFieldProgress findUnique
   */
  export type UserFieldProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldProgress to fetch.
     */
    where: UserFieldProgressWhereUniqueInput
  }

  /**
   * UserFieldProgress findUniqueOrThrow
   */
  export type UserFieldProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldProgress to fetch.
     */
    where: UserFieldProgressWhereUniqueInput
  }

  /**
   * UserFieldProgress findFirst
   */
  export type UserFieldProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldProgress to fetch.
     */
    where?: UserFieldProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldProgresses to fetch.
     */
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFieldProgresses.
     */
    cursor?: UserFieldProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFieldProgresses.
     */
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * UserFieldProgress findFirstOrThrow
   */
  export type UserFieldProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldProgress to fetch.
     */
    where?: UserFieldProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldProgresses to fetch.
     */
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFieldProgresses.
     */
    cursor?: UserFieldProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFieldProgresses.
     */
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * UserFieldProgress findMany
   */
  export type UserFieldProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserFieldProgresses to fetch.
     */
    where?: UserFieldProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFieldProgresses to fetch.
     */
    orderBy?: UserFieldProgressOrderByWithRelationInput | UserFieldProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFieldProgresses.
     */
    cursor?: UserFieldProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFieldProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFieldProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFieldProgresses.
     */
    distinct?: UserFieldProgressScalarFieldEnum | UserFieldProgressScalarFieldEnum[]
  }

  /**
   * UserFieldProgress create
   */
  export type UserFieldProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFieldProgress.
     */
    data: XOR<UserFieldProgressCreateInput, UserFieldProgressUncheckedCreateInput>
  }

  /**
   * UserFieldProgress createMany
   */
  export type UserFieldProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFieldProgresses.
     */
    data: UserFieldProgressCreateManyInput | UserFieldProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFieldProgress createManyAndReturn
   */
  export type UserFieldProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserFieldProgresses.
     */
    data: UserFieldProgressCreateManyInput | UserFieldProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFieldProgress update
   */
  export type UserFieldProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFieldProgress.
     */
    data: XOR<UserFieldProgressUpdateInput, UserFieldProgressUncheckedUpdateInput>
    /**
     * Choose, which UserFieldProgress to update.
     */
    where: UserFieldProgressWhereUniqueInput
  }

  /**
   * UserFieldProgress updateMany
   */
  export type UserFieldProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFieldProgresses.
     */
    data: XOR<UserFieldProgressUpdateManyMutationInput, UserFieldProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserFieldProgresses to update
     */
    where?: UserFieldProgressWhereInput
    /**
     * Limit how many UserFieldProgresses to update.
     */
    limit?: number
  }

  /**
   * UserFieldProgress updateManyAndReturn
   */
  export type UserFieldProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserFieldProgresses.
     */
    data: XOR<UserFieldProgressUpdateManyMutationInput, UserFieldProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserFieldProgresses to update
     */
    where?: UserFieldProgressWhereInput
    /**
     * Limit how many UserFieldProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFieldProgress upsert
   */
  export type UserFieldProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFieldProgress to update in case it exists.
     */
    where: UserFieldProgressWhereUniqueInput
    /**
     * In case the UserFieldProgress found by the `where` argument doesn't exist, create a new UserFieldProgress with this data.
     */
    create: XOR<UserFieldProgressCreateInput, UserFieldProgressUncheckedCreateInput>
    /**
     * In case the UserFieldProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFieldProgressUpdateInput, UserFieldProgressUncheckedUpdateInput>
  }

  /**
   * UserFieldProgress delete
   */
  export type UserFieldProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
    /**
     * Filter which UserFieldProgress to delete.
     */
    where: UserFieldProgressWhereUniqueInput
  }

  /**
   * UserFieldProgress deleteMany
   */
  export type UserFieldProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFieldProgresses to delete
     */
    where?: UserFieldProgressWhereInput
    /**
     * Limit how many UserFieldProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserFieldProgress.image
   */
  export type UserFieldProgress$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * UserFieldProgress without action
   */
  export type UserFieldProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFieldProgress
     */
    select?: UserFieldProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFieldProgress
     */
    omit?: UserFieldProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFieldProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    thumbnailUrl: 'thumbnailUrl',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    order: 'order',
    fieldId: 'fieldId',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fieldId: 'fieldId',
    imageId: 'imageId',
    xMin: 'xMin',
    xMax: 'xMax',
    yMin: 'yMin',
    yMax: 'yMax'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const LeaderBoardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timeTaken: 'timeTaken',
    fieldId: 'fieldId',
    createdAt: 'createdAt'
  };

  export type LeaderBoardScalarFieldEnum = (typeof LeaderBoardScalarFieldEnum)[keyof typeof LeaderBoardScalarFieldEnum]


  export const UserFieldProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fieldId: 'fieldId',
    currentImageId: 'currentImageId',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt',
    completed: 'completed',
    foundCharacters: 'foundCharacters'
  };

  export type UserFieldProgressScalarFieldEnum = (typeof UserFieldProgressScalarFieldEnum)[keyof typeof UserFieldProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    scores?: LeaderBoardListRelationFilter
    userProgress?: UserFieldProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    scores?: LeaderBoardOrderByRelationAggregateInput
    userProgress?: UserFieldProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    scores?: LeaderBoardListRelationFilter
    userProgress?: UserFieldProgressListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FieldWhereInput = {
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    id?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    thumbnailUrl?: StringFilter<"Field"> | string
    description?: StringFilter<"Field"> | string
    createdAt?: DateTimeFilter<"Field"> | Date | string
    images?: ImageListRelationFilter
    scores?: LeaderBoardListRelationFilter
    fieldProgress?: UserFieldProgressListRelationFilter
    characters?: CharacterListRelationFilter
  }

  export type FieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    scores?: LeaderBoardOrderByRelationAggregateInput
    fieldProgress?: UserFieldProgressOrderByRelationAggregateInput
    characters?: CharacterOrderByRelationAggregateInput
  }

  export type FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    name?: StringFilter<"Field"> | string
    thumbnailUrl?: StringFilter<"Field"> | string
    description?: StringFilter<"Field"> | string
    createdAt?: DateTimeFilter<"Field"> | Date | string
    images?: ImageListRelationFilter
    scores?: LeaderBoardListRelationFilter
    fieldProgress?: UserFieldProgressListRelationFilter
    characters?: CharacterListRelationFilter
  }, "id">

  export type FieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: FieldCountOrderByAggregateInput
    _max?: FieldMaxOrderByAggregateInput
    _min?: FieldMinOrderByAggregateInput
  }

  export type FieldScalarWhereWithAggregatesInput = {
    AND?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    OR?: FieldScalarWhereWithAggregatesInput[]
    NOT?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Field"> | string
    name?: StringWithAggregatesFilter<"Field"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Field"> | string
    description?: StringWithAggregatesFilter<"Field"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Field"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    order?: IntFilter<"Image"> | number
    fieldId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    characters?: CharacterListRelationFilter
    imageProgress?: UserFieldProgressListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    field?: FieldOrderByWithRelationInput
    characters?: CharacterOrderByRelationAggregateInput
    imageProgress?: UserFieldProgressOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    imageUrl?: StringFilter<"Image"> | string
    order?: IntFilter<"Image"> | number
    fieldId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    characters?: CharacterListRelationFilter
    imageProgress?: UserFieldProgressListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Image"> | string
    order?: IntWithAggregatesFilter<"Image"> | number
    fieldId?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    fieldId?: StringFilter<"Character"> | string
    imageId?: StringFilter<"Character"> | string
    xMin?: FloatFilter<"Character"> | number
    xMax?: FloatFilter<"Character"> | number
    yMin?: FloatFilter<"Character"> | number
    yMax?: FloatFilter<"Character"> | number
    Field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    Image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fieldId?: SortOrder
    imageId?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
    Field?: FieldOrderByWithRelationInput
    Image?: ImageOrderByWithRelationInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_fieldId?: CharacterNameFieldIdCompoundUniqueInput
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    name?: StringFilter<"Character"> | string
    fieldId?: StringFilter<"Character"> | string
    imageId?: StringFilter<"Character"> | string
    xMin?: FloatFilter<"Character"> | number
    xMax?: FloatFilter<"Character"> | number
    yMin?: FloatFilter<"Character"> | number
    yMax?: FloatFilter<"Character"> | number
    Field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    Image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id" | "name_fieldId">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fieldId?: SortOrder
    imageId?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    fieldId?: StringWithAggregatesFilter<"Character"> | string
    imageId?: StringWithAggregatesFilter<"Character"> | string
    xMin?: FloatWithAggregatesFilter<"Character"> | number
    xMax?: FloatWithAggregatesFilter<"Character"> | number
    yMin?: FloatWithAggregatesFilter<"Character"> | number
    yMax?: FloatWithAggregatesFilter<"Character"> | number
  }

  export type LeaderBoardWhereInput = {
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    id?: StringFilter<"LeaderBoard"> | string
    userId?: StringFilter<"LeaderBoard"> | string
    timeTaken?: IntFilter<"LeaderBoard"> | number
    fieldId?: StringFilter<"LeaderBoard"> | string
    createdAt?: DateTimeFilter<"LeaderBoard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }

  export type LeaderBoardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timeTaken?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type LeaderBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_fieldId?: LeaderBoardUserIdFieldIdCompoundUniqueInput
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    userId?: StringFilter<"LeaderBoard"> | string
    timeTaken?: IntFilter<"LeaderBoard"> | number
    fieldId?: StringFilter<"LeaderBoard"> | string
    createdAt?: DateTimeFilter<"LeaderBoard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }, "id" | "userId_fieldId">

  export type LeaderBoardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timeTaken?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
    _count?: LeaderBoardCountOrderByAggregateInput
    _avg?: LeaderBoardAvgOrderByAggregateInput
    _max?: LeaderBoardMaxOrderByAggregateInput
    _min?: LeaderBoardMinOrderByAggregateInput
    _sum?: LeaderBoardSumOrderByAggregateInput
  }

  export type LeaderBoardScalarWhereWithAggregatesInput = {
    AND?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    OR?: LeaderBoardScalarWhereWithAggregatesInput[]
    NOT?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderBoard"> | string
    userId?: StringWithAggregatesFilter<"LeaderBoard"> | string
    timeTaken?: IntWithAggregatesFilter<"LeaderBoard"> | number
    fieldId?: StringWithAggregatesFilter<"LeaderBoard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaderBoard"> | Date | string
  }

  export type UserFieldProgressWhereInput = {
    AND?: UserFieldProgressWhereInput | UserFieldProgressWhereInput[]
    OR?: UserFieldProgressWhereInput[]
    NOT?: UserFieldProgressWhereInput | UserFieldProgressWhereInput[]
    id?: StringFilter<"UserFieldProgress"> | string
    userId?: StringFilter<"UserFieldProgress"> | string
    fieldId?: StringFilter<"UserFieldProgress"> | string
    currentImageId?: StringNullableFilter<"UserFieldProgress"> | string | null
    startedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserFieldProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completed?: BoolFilter<"UserFieldProgress"> | boolean
    foundCharacters?: StringNullableListFilter<"UserFieldProgress">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type UserFieldProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    currentImageId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    foundCharacters?: SortOrder
    user?: UserOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type UserFieldProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_fieldId?: UserFieldProgressUserIdFieldIdCompoundUniqueInput
    AND?: UserFieldProgressWhereInput | UserFieldProgressWhereInput[]
    OR?: UserFieldProgressWhereInput[]
    NOT?: UserFieldProgressWhereInput | UserFieldProgressWhereInput[]
    userId?: StringFilter<"UserFieldProgress"> | string
    fieldId?: StringFilter<"UserFieldProgress"> | string
    currentImageId?: StringNullableFilter<"UserFieldProgress"> | string | null
    startedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserFieldProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completed?: BoolFilter<"UserFieldProgress"> | boolean
    foundCharacters?: StringNullableListFilter<"UserFieldProgress">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id" | "userId_fieldId">

  export type UserFieldProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    currentImageId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    foundCharacters?: SortOrder
    _count?: UserFieldProgressCountOrderByAggregateInput
    _max?: UserFieldProgressMaxOrderByAggregateInput
    _min?: UserFieldProgressMinOrderByAggregateInput
  }

  export type UserFieldProgressScalarWhereWithAggregatesInput = {
    AND?: UserFieldProgressScalarWhereWithAggregatesInput | UserFieldProgressScalarWhereWithAggregatesInput[]
    OR?: UserFieldProgressScalarWhereWithAggregatesInput[]
    NOT?: UserFieldProgressScalarWhereWithAggregatesInput | UserFieldProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFieldProgress"> | string
    userId?: StringWithAggregatesFilter<"UserFieldProgress"> | string
    fieldId?: StringWithAggregatesFilter<"UserFieldProgress"> | string
    currentImageId?: StringNullableWithAggregatesFilter<"UserFieldProgress"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"UserFieldProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserFieldProgress"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserFieldProgress"> | Date | string
    completed?: BoolWithAggregatesFilter<"UserFieldProgress"> | boolean
    foundCharacters?: StringNullableListFilter<"UserFieldProgress">
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    scores?: LeaderBoardCreateNestedManyWithoutUserInput
    userProgress?: UserFieldProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutUserInput
    userProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUpdateManyWithoutUserNestedInput
    userProgress?: UserFieldProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUncheckedUpdateManyWithoutUserNestedInput
    userProgress?: UserFieldProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCreateInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressCreateNestedManyWithoutFieldInput
    characters?: CharacterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutFieldInput
    characters?: CharacterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUpdateManyWithoutFieldNestedInput
    characters?: CharacterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUncheckedUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUncheckedUpdateManyWithoutFieldNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCreateManyInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
  }

  export type FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
    field: FieldCreateNestedOneWithoutImagesInput
    characters?: CharacterCreateNestedManyWithoutImageInput
    imageProgress?: UserFieldProgressCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    order: number
    fieldId: string
    createdAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutImageInput
    imageProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutImagesNestedInput
    characters?: CharacterUpdateManyWithoutImageNestedInput
    imageProgress?: UserFieldProgressUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutImageNestedInput
    imageProgress?: UserFieldProgressUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    imageUrl: string
    order: number
    fieldId: string
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    Field: FieldCreateNestedOneWithoutCharactersInput
    Image: ImageCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    name: string
    fieldId: string
    imageId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
    Field?: FieldUpdateOneRequiredWithoutCharactersNestedInput
    Image?: ImageUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type CharacterCreateManyInput = {
    id?: string
    name: string
    fieldId: string
    imageId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type LeaderBoardCreateInput = {
    id?: string
    timeTaken: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutScoresInput
    field: FieldCreateNestedOneWithoutScoresInput
  }

  export type LeaderBoardUncheckedCreateInput = {
    id?: string
    userId: string
    timeTaken: number
    fieldId: string
    createdAt?: Date | string
  }

  export type LeaderBoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
    field?: FieldUpdateOneRequiredWithoutScoresNestedInput
  }

  export type LeaderBoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardCreateManyInput = {
    id?: string
    userId: string
    timeTaken: number
    fieldId: string
    createdAt?: Date | string
  }

  export type LeaderBoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldProgressCreateInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
    user: UserCreateNestedOneWithoutUserProgressInput
    field: FieldCreateNestedOneWithoutFieldProgressInput
    image?: ImageCreateNestedOneWithoutImageProgressInput
  }

  export type UserFieldProgressUncheckedCreateInput = {
    id?: string
    userId: string
    fieldId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
    user?: UserUpdateOneRequiredWithoutUserProgressNestedInput
    field?: FieldUpdateOneRequiredWithoutFieldProgressNestedInput
    image?: ImageUpdateOneWithoutImageProgressNestedInput
  }

  export type UserFieldProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type UserFieldProgressCreateManyInput = {
    id?: string
    userId: string
    fieldId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeaderBoardListRelationFilter = {
    every?: LeaderBoardWhereInput
    some?: LeaderBoardWhereInput
    none?: LeaderBoardWhereInput
  }

  export type UserFieldProgressListRelationFilter = {
    every?: UserFieldProgressWhereInput
    some?: UserFieldProgressWhereInput
    none?: UserFieldProgressWhereInput
  }

  export type LeaderBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFieldProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FieldScalarRelationFilter = {
    is?: FieldWhereInput
    isNot?: FieldWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type CharacterNameFieldIdCompoundUniqueInput = {
    name: string
    fieldId: string
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fieldId?: SortOrder
    imageId?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fieldId?: SortOrder
    imageId?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fieldId?: SortOrder
    imageId?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeaderBoardUserIdFieldIdCompoundUniqueInput = {
    userId: string
    fieldId: string
  }

  export type LeaderBoardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeTaken?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderBoardAvgOrderByAggregateInput = {
    timeTaken?: SortOrder
  }

  export type LeaderBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeTaken?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderBoardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeTaken?: SortOrder
    fieldId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderBoardSumOrderByAggregateInput = {
    timeTaken?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserFieldProgressUserIdFieldIdCompoundUniqueInput = {
    userId: string
    fieldId: string
  }

  export type UserFieldProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    currentImageId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
    foundCharacters?: SortOrder
  }

  export type UserFieldProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    currentImageId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type UserFieldProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fieldId?: SortOrder
    currentImageId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    updatedAt?: SortOrder
    completed?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeaderBoardCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type UserFieldProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput> | UserFieldProgressCreateWithoutUserInput[] | UserFieldProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutUserInput | UserFieldProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserFieldProgressCreateManyUserInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type LeaderBoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type UserFieldProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput> | UserFieldProgressCreateWithoutUserInput[] | UserFieldProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutUserInput | UserFieldProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserFieldProgressCreateManyUserInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeaderBoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutUserInput | LeaderBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutUserInput | LeaderBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutUserInput | LeaderBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type UserFieldProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput> | UserFieldProgressCreateWithoutUserInput[] | UserFieldProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutUserInput | UserFieldProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutUserInput | UserFieldProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFieldProgressCreateManyUserInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutUserInput | UserFieldProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutUserInput | UserFieldProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type LeaderBoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput> | LeaderBoardCreateWithoutUserInput[] | LeaderBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutUserInput | LeaderBoardCreateOrConnectWithoutUserInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutUserInput | LeaderBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaderBoardCreateManyUserInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutUserInput | LeaderBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutUserInput | LeaderBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput> | UserFieldProgressCreateWithoutUserInput[] | UserFieldProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutUserInput | UserFieldProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutUserInput | UserFieldProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFieldProgressCreateManyUserInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutUserInput | UserFieldProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutUserInput | UserFieldProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutFieldInput = {
    create?: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput> | ImageCreateWithoutFieldInput[] | ImageUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFieldInput | ImageCreateOrConnectWithoutFieldInput[]
    createMany?: ImageCreateManyFieldInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LeaderBoardCreateNestedManyWithoutFieldInput = {
    create?: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput> | LeaderBoardCreateWithoutFieldInput[] | LeaderBoardUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutFieldInput | LeaderBoardCreateOrConnectWithoutFieldInput[]
    createMany?: LeaderBoardCreateManyFieldInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type UserFieldProgressCreateNestedManyWithoutFieldInput = {
    create?: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput> | UserFieldProgressCreateWithoutFieldInput[] | UserFieldProgressUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutFieldInput | UserFieldProgressCreateOrConnectWithoutFieldInput[]
    createMany?: UserFieldProgressCreateManyFieldInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutFieldInput = {
    create?: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput> | CharacterCreateWithoutFieldInput[] | CharacterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFieldInput | CharacterCreateOrConnectWithoutFieldInput[]
    createMany?: CharacterCreateManyFieldInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput> | ImageCreateWithoutFieldInput[] | ImageUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFieldInput | ImageCreateOrConnectWithoutFieldInput[]
    createMany?: ImageCreateManyFieldInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LeaderBoardUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput> | LeaderBoardCreateWithoutFieldInput[] | LeaderBoardUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutFieldInput | LeaderBoardCreateOrConnectWithoutFieldInput[]
    createMany?: LeaderBoardCreateManyFieldInputEnvelope
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
  }

  export type UserFieldProgressUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput> | UserFieldProgressCreateWithoutFieldInput[] | UserFieldProgressUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutFieldInput | UserFieldProgressCreateOrConnectWithoutFieldInput[]
    createMany?: UserFieldProgressCreateManyFieldInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput> | CharacterCreateWithoutFieldInput[] | CharacterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFieldInput | CharacterCreateOrConnectWithoutFieldInput[]
    createMany?: CharacterCreateManyFieldInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput> | ImageCreateWithoutFieldInput[] | ImageUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFieldInput | ImageCreateOrConnectWithoutFieldInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFieldInput | ImageUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ImageCreateManyFieldInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFieldInput | ImageUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFieldInput | ImageUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LeaderBoardUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput> | LeaderBoardCreateWithoutFieldInput[] | LeaderBoardUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutFieldInput | LeaderBoardCreateOrConnectWithoutFieldInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutFieldInput | LeaderBoardUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LeaderBoardCreateManyFieldInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutFieldInput | LeaderBoardUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutFieldInput | LeaderBoardUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type UserFieldProgressUpdateManyWithoutFieldNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput> | UserFieldProgressCreateWithoutFieldInput[] | UserFieldProgressUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutFieldInput | UserFieldProgressCreateOrConnectWithoutFieldInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutFieldInput | UserFieldProgressUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: UserFieldProgressCreateManyFieldInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutFieldInput | UserFieldProgressUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutFieldInput | UserFieldProgressUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput> | CharacterCreateWithoutFieldInput[] | CharacterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFieldInput | CharacterCreateOrConnectWithoutFieldInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutFieldInput | CharacterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CharacterCreateManyFieldInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutFieldInput | CharacterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutFieldInput | CharacterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput> | ImageCreateWithoutFieldInput[] | ImageUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFieldInput | ImageCreateOrConnectWithoutFieldInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFieldInput | ImageUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ImageCreateManyFieldInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFieldInput | ImageUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFieldInput | ImageUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LeaderBoardUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput> | LeaderBoardCreateWithoutFieldInput[] | LeaderBoardUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LeaderBoardCreateOrConnectWithoutFieldInput | LeaderBoardCreateOrConnectWithoutFieldInput[]
    upsert?: LeaderBoardUpsertWithWhereUniqueWithoutFieldInput | LeaderBoardUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LeaderBoardCreateManyFieldInputEnvelope
    set?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    disconnect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    delete?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    connect?: LeaderBoardWhereUniqueInput | LeaderBoardWhereUniqueInput[]
    update?: LeaderBoardUpdateWithWhereUniqueWithoutFieldInput | LeaderBoardUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LeaderBoardUpdateManyWithWhereWithoutFieldInput | LeaderBoardUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput> | UserFieldProgressCreateWithoutFieldInput[] | UserFieldProgressUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutFieldInput | UserFieldProgressCreateOrConnectWithoutFieldInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutFieldInput | UserFieldProgressUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: UserFieldProgressCreateManyFieldInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutFieldInput | UserFieldProgressUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutFieldInput | UserFieldProgressUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput> | CharacterCreateWithoutFieldInput[] | CharacterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutFieldInput | CharacterCreateOrConnectWithoutFieldInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutFieldInput | CharacterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CharacterCreateManyFieldInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutFieldInput | CharacterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutFieldInput | CharacterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutImagesInput = {
    create?: XOR<FieldCreateWithoutImagesInput, FieldUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FieldCreateOrConnectWithoutImagesInput
    connect?: FieldWhereUniqueInput
  }

  export type CharacterCreateNestedManyWithoutImageInput = {
    create?: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput> | CharacterCreateWithoutImageInput[] | CharacterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutImageInput | CharacterCreateOrConnectWithoutImageInput[]
    createMany?: CharacterCreateManyImageInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type UserFieldProgressCreateNestedManyWithoutImageInput = {
    create?: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput> | UserFieldProgressCreateWithoutImageInput[] | UserFieldProgressUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutImageInput | UserFieldProgressCreateOrConnectWithoutImageInput[]
    createMany?: UserFieldProgressCreateManyImageInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput> | CharacterCreateWithoutImageInput[] | CharacterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutImageInput | CharacterCreateOrConnectWithoutImageInput[]
    createMany?: CharacterCreateManyImageInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type UserFieldProgressUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput> | UserFieldProgressCreateWithoutImageInput[] | UserFieldProgressUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutImageInput | UserFieldProgressCreateOrConnectWithoutImageInput[]
    createMany?: UserFieldProgressCreateManyImageInputEnvelope
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FieldUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<FieldCreateWithoutImagesInput, FieldUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FieldCreateOrConnectWithoutImagesInput
    upsert?: FieldUpsertWithoutImagesInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutImagesInput, FieldUpdateWithoutImagesInput>, FieldUncheckedUpdateWithoutImagesInput>
  }

  export type CharacterUpdateManyWithoutImageNestedInput = {
    create?: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput> | CharacterCreateWithoutImageInput[] | CharacterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutImageInput | CharacterCreateOrConnectWithoutImageInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutImageInput | CharacterUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CharacterCreateManyImageInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutImageInput | CharacterUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutImageInput | CharacterUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type UserFieldProgressUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput> | UserFieldProgressCreateWithoutImageInput[] | UserFieldProgressUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutImageInput | UserFieldProgressCreateOrConnectWithoutImageInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutImageInput | UserFieldProgressUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserFieldProgressCreateManyImageInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutImageInput | UserFieldProgressUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutImageInput | UserFieldProgressUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput> | CharacterCreateWithoutImageInput[] | CharacterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutImageInput | CharacterCreateOrConnectWithoutImageInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutImageInput | CharacterUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: CharacterCreateManyImageInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutImageInput | CharacterUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutImageInput | CharacterUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput> | UserFieldProgressCreateWithoutImageInput[] | UserFieldProgressUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserFieldProgressCreateOrConnectWithoutImageInput | UserFieldProgressCreateOrConnectWithoutImageInput[]
    upsert?: UserFieldProgressUpsertWithWhereUniqueWithoutImageInput | UserFieldProgressUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserFieldProgressCreateManyImageInputEnvelope
    set?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    disconnect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    delete?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    connect?: UserFieldProgressWhereUniqueInput | UserFieldProgressWhereUniqueInput[]
    update?: UserFieldProgressUpdateWithWhereUniqueWithoutImageInput | UserFieldProgressUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserFieldProgressUpdateManyWithWhereWithoutImageInput | UserFieldProgressUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutCharactersInput = {
    create?: XOR<FieldCreateWithoutCharactersInput, FieldUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCharactersInput
    connect?: FieldWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutCharactersInput = {
    create?: XOR<ImageCreateWithoutCharactersInput, ImageUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCharactersInput
    connect?: ImageWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FieldUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<FieldCreateWithoutCharactersInput, FieldUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCharactersInput
    upsert?: FieldUpsertWithoutCharactersInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutCharactersInput, FieldUpdateWithoutCharactersInput>, FieldUncheckedUpdateWithoutCharactersInput>
  }

  export type ImageUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<ImageCreateWithoutCharactersInput, ImageUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCharactersInput
    upsert?: ImageUpsertWithoutCharactersInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutCharactersInput, ImageUpdateWithoutCharactersInput>, ImageUncheckedUpdateWithoutCharactersInput>
  }

  export type UserCreateNestedOneWithoutScoresInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    connect?: UserWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutScoresInput = {
    create?: XOR<FieldCreateWithoutScoresInput, FieldUncheckedCreateWithoutScoresInput>
    connectOrCreate?: FieldCreateOrConnectWithoutScoresInput
    connect?: FieldWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    upsert?: UserUpsertWithoutScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoresInput, UserUpdateWithoutScoresInput>, UserUncheckedUpdateWithoutScoresInput>
  }

  export type FieldUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<FieldCreateWithoutScoresInput, FieldUncheckedCreateWithoutScoresInput>
    connectOrCreate?: FieldCreateOrConnectWithoutScoresInput
    upsert?: FieldUpsertWithoutScoresInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutScoresInput, FieldUpdateWithoutScoresInput>, FieldUncheckedUpdateWithoutScoresInput>
  }

  export type UserFieldProgressCreatefoundCharactersInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<UserCreateWithoutUserProgressInput, UserUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProgressInput
    connect?: UserWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutFieldProgressInput = {
    create?: XOR<FieldCreateWithoutFieldProgressInput, FieldUncheckedCreateWithoutFieldProgressInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFieldProgressInput
    connect?: FieldWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutImageProgressInput = {
    create?: XOR<ImageCreateWithoutImageProgressInput, ImageUncheckedCreateWithoutImageProgressInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImageProgressInput
    connect?: ImageWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserFieldProgressUpdatefoundCharactersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<UserCreateWithoutUserProgressInput, UserUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProgressInput
    upsert?: UserUpsertWithoutUserProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProgressInput, UserUpdateWithoutUserProgressInput>, UserUncheckedUpdateWithoutUserProgressInput>
  }

  export type FieldUpdateOneRequiredWithoutFieldProgressNestedInput = {
    create?: XOR<FieldCreateWithoutFieldProgressInput, FieldUncheckedCreateWithoutFieldProgressInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFieldProgressInput
    upsert?: FieldUpsertWithoutFieldProgressInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutFieldProgressInput, FieldUpdateWithoutFieldProgressInput>, FieldUncheckedUpdateWithoutFieldProgressInput>
  }

  export type ImageUpdateOneWithoutImageProgressNestedInput = {
    create?: XOR<ImageCreateWithoutImageProgressInput, ImageUncheckedCreateWithoutImageProgressInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImageProgressInput
    upsert?: ImageUpsertWithoutImageProgressInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutImageProgressInput, ImageUpdateWithoutImageProgressInput>, ImageUncheckedUpdateWithoutImageProgressInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeaderBoardCreateWithoutUserInput = {
    id?: string
    timeTaken: number
    createdAt?: Date | string
    field: FieldCreateNestedOneWithoutScoresInput
  }

  export type LeaderBoardUncheckedCreateWithoutUserInput = {
    id?: string
    timeTaken: number
    fieldId: string
    createdAt?: Date | string
  }

  export type LeaderBoardCreateOrConnectWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    create: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput>
  }

  export type LeaderBoardCreateManyUserInputEnvelope = {
    data: LeaderBoardCreateManyUserInput | LeaderBoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFieldProgressCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
    field: FieldCreateNestedOneWithoutFieldProgressInput
    image?: ImageCreateNestedOneWithoutImageProgressInput
  }

  export type UserFieldProgressUncheckedCreateWithoutUserInput = {
    id?: string
    fieldId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type UserFieldProgressCreateOrConnectWithoutUserInput = {
    where: UserFieldProgressWhereUniqueInput
    create: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput>
  }

  export type UserFieldProgressCreateManyUserInputEnvelope = {
    data: UserFieldProgressCreateManyUserInput | UserFieldProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaderBoardUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    update: XOR<LeaderBoardUpdateWithoutUserInput, LeaderBoardUncheckedUpdateWithoutUserInput>
    create: XOR<LeaderBoardCreateWithoutUserInput, LeaderBoardUncheckedCreateWithoutUserInput>
  }

  export type LeaderBoardUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaderBoardWhereUniqueInput
    data: XOR<LeaderBoardUpdateWithoutUserInput, LeaderBoardUncheckedUpdateWithoutUserInput>
  }

  export type LeaderBoardUpdateManyWithWhereWithoutUserInput = {
    where: LeaderBoardScalarWhereInput
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaderBoardScalarWhereInput = {
    AND?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
    OR?: LeaderBoardScalarWhereInput[]
    NOT?: LeaderBoardScalarWhereInput | LeaderBoardScalarWhereInput[]
    id?: StringFilter<"LeaderBoard"> | string
    userId?: StringFilter<"LeaderBoard"> | string
    timeTaken?: IntFilter<"LeaderBoard"> | number
    fieldId?: StringFilter<"LeaderBoard"> | string
    createdAt?: DateTimeFilter<"LeaderBoard"> | Date | string
  }

  export type UserFieldProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFieldProgressWhereUniqueInput
    update: XOR<UserFieldProgressUpdateWithoutUserInput, UserFieldProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserFieldProgressCreateWithoutUserInput, UserFieldProgressUncheckedCreateWithoutUserInput>
  }

  export type UserFieldProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFieldProgressWhereUniqueInput
    data: XOR<UserFieldProgressUpdateWithoutUserInput, UserFieldProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserFieldProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserFieldProgressScalarWhereInput
    data: XOR<UserFieldProgressUpdateManyMutationInput, UserFieldProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFieldProgressScalarWhereInput = {
    AND?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
    OR?: UserFieldProgressScalarWhereInput[]
    NOT?: UserFieldProgressScalarWhereInput | UserFieldProgressScalarWhereInput[]
    id?: StringFilter<"UserFieldProgress"> | string
    userId?: StringFilter<"UserFieldProgress"> | string
    fieldId?: StringFilter<"UserFieldProgress"> | string
    currentImageId?: StringNullableFilter<"UserFieldProgress"> | string | null
    startedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserFieldProgress"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserFieldProgress"> | Date | string
    completed?: BoolFilter<"UserFieldProgress"> | boolean
    foundCharacters?: StringNullableListFilter<"UserFieldProgress">
  }

  export type ImageCreateWithoutFieldInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
    characters?: CharacterCreateNestedManyWithoutImageInput
    imageProgress?: UserFieldProgressCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutFieldInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutImageInput
    imageProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutFieldInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput>
  }

  export type ImageCreateManyFieldInputEnvelope = {
    data: ImageCreateManyFieldInput | ImageCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type LeaderBoardCreateWithoutFieldInput = {
    id?: string
    timeTaken: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type LeaderBoardUncheckedCreateWithoutFieldInput = {
    id?: string
    userId: string
    timeTaken: number
    createdAt?: Date | string
  }

  export type LeaderBoardCreateOrConnectWithoutFieldInput = {
    where: LeaderBoardWhereUniqueInput
    create: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput>
  }

  export type LeaderBoardCreateManyFieldInputEnvelope = {
    data: LeaderBoardCreateManyFieldInput | LeaderBoardCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type UserFieldProgressCreateWithoutFieldInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
    user: UserCreateNestedOneWithoutUserProgressInput
    image?: ImageCreateNestedOneWithoutImageProgressInput
  }

  export type UserFieldProgressUncheckedCreateWithoutFieldInput = {
    id?: string
    userId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type UserFieldProgressCreateOrConnectWithoutFieldInput = {
    where: UserFieldProgressWhereUniqueInput
    create: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput>
  }

  export type UserFieldProgressCreateManyFieldInputEnvelope = {
    data: UserFieldProgressCreateManyFieldInput | UserFieldProgressCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type CharacterCreateWithoutFieldInput = {
    id?: string
    name: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    Image: ImageCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutFieldInput = {
    id?: string
    name: string
    imageId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CharacterCreateOrConnectWithoutFieldInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput>
  }

  export type CharacterCreateManyFieldInputEnvelope = {
    data: CharacterCreateManyFieldInput | CharacterCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutFieldInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutFieldInput, ImageUncheckedUpdateWithoutFieldInput>
    create: XOR<ImageCreateWithoutFieldInput, ImageUncheckedCreateWithoutFieldInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutFieldInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutFieldInput, ImageUncheckedUpdateWithoutFieldInput>
  }

  export type ImageUpdateManyWithWhereWithoutFieldInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutFieldInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    order?: IntFilter<"Image"> | number
    fieldId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type LeaderBoardUpsertWithWhereUniqueWithoutFieldInput = {
    where: LeaderBoardWhereUniqueInput
    update: XOR<LeaderBoardUpdateWithoutFieldInput, LeaderBoardUncheckedUpdateWithoutFieldInput>
    create: XOR<LeaderBoardCreateWithoutFieldInput, LeaderBoardUncheckedCreateWithoutFieldInput>
  }

  export type LeaderBoardUpdateWithWhereUniqueWithoutFieldInput = {
    where: LeaderBoardWhereUniqueInput
    data: XOR<LeaderBoardUpdateWithoutFieldInput, LeaderBoardUncheckedUpdateWithoutFieldInput>
  }

  export type LeaderBoardUpdateManyWithWhereWithoutFieldInput = {
    where: LeaderBoardScalarWhereInput
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyWithoutFieldInput>
  }

  export type UserFieldProgressUpsertWithWhereUniqueWithoutFieldInput = {
    where: UserFieldProgressWhereUniqueInput
    update: XOR<UserFieldProgressUpdateWithoutFieldInput, UserFieldProgressUncheckedUpdateWithoutFieldInput>
    create: XOR<UserFieldProgressCreateWithoutFieldInput, UserFieldProgressUncheckedCreateWithoutFieldInput>
  }

  export type UserFieldProgressUpdateWithWhereUniqueWithoutFieldInput = {
    where: UserFieldProgressWhereUniqueInput
    data: XOR<UserFieldProgressUpdateWithoutFieldInput, UserFieldProgressUncheckedUpdateWithoutFieldInput>
  }

  export type UserFieldProgressUpdateManyWithWhereWithoutFieldInput = {
    where: UserFieldProgressScalarWhereInput
    data: XOR<UserFieldProgressUpdateManyMutationInput, UserFieldProgressUncheckedUpdateManyWithoutFieldInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutFieldInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutFieldInput, CharacterUncheckedUpdateWithoutFieldInput>
    create: XOR<CharacterCreateWithoutFieldInput, CharacterUncheckedCreateWithoutFieldInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutFieldInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutFieldInput, CharacterUncheckedUpdateWithoutFieldInput>
  }

  export type CharacterUpdateManyWithWhereWithoutFieldInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutFieldInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    fieldId?: StringFilter<"Character"> | string
    imageId?: StringFilter<"Character"> | string
    xMin?: FloatFilter<"Character"> | number
    xMax?: FloatFilter<"Character"> | number
    yMin?: FloatFilter<"Character"> | number
    yMax?: FloatFilter<"Character"> | number
  }

  export type FieldCreateWithoutImagesInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    scores?: LeaderBoardCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressCreateNestedManyWithoutFieldInput
    characters?: CharacterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutFieldInput
    characters?: CharacterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutImagesInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutImagesInput, FieldUncheckedCreateWithoutImagesInput>
  }

  export type CharacterCreateWithoutImageInput = {
    id?: string
    name: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    Field: FieldCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateWithoutImageInput = {
    id?: string
    name: string
    fieldId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CharacterCreateOrConnectWithoutImageInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput>
  }

  export type CharacterCreateManyImageInputEnvelope = {
    data: CharacterCreateManyImageInput | CharacterCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type UserFieldProgressCreateWithoutImageInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
    user: UserCreateNestedOneWithoutUserProgressInput
    field: FieldCreateNestedOneWithoutFieldProgressInput
  }

  export type UserFieldProgressUncheckedCreateWithoutImageInput = {
    id?: string
    userId: string
    fieldId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type UserFieldProgressCreateOrConnectWithoutImageInput = {
    where: UserFieldProgressWhereUniqueInput
    create: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput>
  }

  export type UserFieldProgressCreateManyImageInputEnvelope = {
    data: UserFieldProgressCreateManyImageInput | UserFieldProgressCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type FieldUpsertWithoutImagesInput = {
    update: XOR<FieldUpdateWithoutImagesInput, FieldUncheckedUpdateWithoutImagesInput>
    create: XOR<FieldCreateWithoutImagesInput, FieldUncheckedCreateWithoutImagesInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutImagesInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutImagesInput, FieldUncheckedUpdateWithoutImagesInput>
  }

  export type FieldUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUpdateManyWithoutFieldNestedInput
    characters?: CharacterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUncheckedUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUncheckedUpdateManyWithoutFieldNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CharacterUpsertWithWhereUniqueWithoutImageInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutImageInput, CharacterUncheckedUpdateWithoutImageInput>
    create: XOR<CharacterCreateWithoutImageInput, CharacterUncheckedCreateWithoutImageInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutImageInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutImageInput, CharacterUncheckedUpdateWithoutImageInput>
  }

  export type CharacterUpdateManyWithWhereWithoutImageInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutImageInput>
  }

  export type UserFieldProgressUpsertWithWhereUniqueWithoutImageInput = {
    where: UserFieldProgressWhereUniqueInput
    update: XOR<UserFieldProgressUpdateWithoutImageInput, UserFieldProgressUncheckedUpdateWithoutImageInput>
    create: XOR<UserFieldProgressCreateWithoutImageInput, UserFieldProgressUncheckedCreateWithoutImageInput>
  }

  export type UserFieldProgressUpdateWithWhereUniqueWithoutImageInput = {
    where: UserFieldProgressWhereUniqueInput
    data: XOR<UserFieldProgressUpdateWithoutImageInput, UserFieldProgressUncheckedUpdateWithoutImageInput>
  }

  export type UserFieldProgressUpdateManyWithWhereWithoutImageInput = {
    where: UserFieldProgressScalarWhereInput
    data: XOR<UserFieldProgressUpdateManyMutationInput, UserFieldProgressUncheckedUpdateManyWithoutImageInput>
  }

  export type FieldCreateWithoutCharactersInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutCharactersInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutCharactersInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutCharactersInput, FieldUncheckedCreateWithoutCharactersInput>
  }

  export type ImageCreateWithoutCharactersInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
    field: FieldCreateNestedOneWithoutImagesInput
    imageProgress?: UserFieldProgressCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCharactersInput = {
    id?: string
    imageUrl: string
    order: number
    fieldId: string
    createdAt?: Date | string
    imageProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCharactersInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCharactersInput, ImageUncheckedCreateWithoutCharactersInput>
  }

  export type FieldUpsertWithoutCharactersInput = {
    update: XOR<FieldUpdateWithoutCharactersInput, FieldUncheckedUpdateWithoutCharactersInput>
    create: XOR<FieldCreateWithoutCharactersInput, FieldUncheckedCreateWithoutCharactersInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutCharactersInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutCharactersInput, FieldUncheckedUpdateWithoutCharactersInput>
  }

  export type FieldUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUncheckedUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type ImageUpsertWithoutCharactersInput = {
    update: XOR<ImageUpdateWithoutCharactersInput, ImageUncheckedUpdateWithoutCharactersInput>
    create: XOR<ImageCreateWithoutCharactersInput, ImageUncheckedCreateWithoutCharactersInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutCharactersInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutCharactersInput, ImageUncheckedUpdateWithoutCharactersInput>
  }

  export type ImageUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutImagesNestedInput
    imageProgress?: UserFieldProgressUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageProgress?: UserFieldProgressUncheckedUpdateManyWithoutImageNestedInput
  }

  export type UserCreateWithoutScoresInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userProgress?: UserFieldProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScoresInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
  }

  export type FieldCreateWithoutScoresInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressCreateNestedManyWithoutFieldInput
    characters?: CharacterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFieldInput
    fieldProgress?: UserFieldProgressUncheckedCreateNestedManyWithoutFieldInput
    characters?: CharacterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutScoresInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutScoresInput, FieldUncheckedCreateWithoutScoresInput>
  }

  export type UserUpsertWithoutScoresInput = {
    update: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserFieldProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserFieldProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FieldUpsertWithoutScoresInput = {
    update: XOR<FieldUpdateWithoutScoresInput, FieldUncheckedUpdateWithoutScoresInput>
    create: XOR<FieldCreateWithoutScoresInput, FieldUncheckedCreateWithoutScoresInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutScoresInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutScoresInput, FieldUncheckedUpdateWithoutScoresInput>
  }

  export type FieldUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUpdateManyWithoutFieldNestedInput
    characters?: CharacterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFieldNestedInput
    fieldProgress?: UserFieldProgressUncheckedUpdateManyWithoutFieldNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type UserCreateWithoutUserProgressInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    scores?: LeaderBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProgressInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProgressInput, UserUncheckedCreateWithoutUserProgressInput>
  }

  export type FieldCreateWithoutFieldProgressInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardCreateNestedManyWithoutFieldInput
    characters?: CharacterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutFieldProgressInput = {
    id?: string
    name: string
    thumbnailUrl: string
    description: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFieldInput
    scores?: LeaderBoardUncheckedCreateNestedManyWithoutFieldInput
    characters?: CharacterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutFieldProgressInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutFieldProgressInput, FieldUncheckedCreateWithoutFieldProgressInput>
  }

  export type ImageCreateWithoutImageProgressInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
    field: FieldCreateNestedOneWithoutImagesInput
    characters?: CharacterCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutImageProgressInput = {
    id?: string
    imageUrl: string
    order: number
    fieldId: string
    createdAt?: Date | string
    characters?: CharacterUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutImageProgressInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutImageProgressInput, ImageUncheckedCreateWithoutImageProgressInput>
  }

  export type UserUpsertWithoutUserProgressInput = {
    update: XOR<UserUpdateWithoutUserProgressInput, UserUncheckedUpdateWithoutUserProgressInput>
    create: XOR<UserCreateWithoutUserProgressInput, UserUncheckedCreateWithoutUserProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProgressInput, UserUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: LeaderBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FieldUpsertWithoutFieldProgressInput = {
    update: XOR<FieldUpdateWithoutFieldProgressInput, FieldUncheckedUpdateWithoutFieldProgressInput>
    create: XOR<FieldCreateWithoutFieldProgressInput, FieldUncheckedCreateWithoutFieldProgressInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutFieldProgressInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutFieldProgressInput, FieldUncheckedUpdateWithoutFieldProgressInput>
  }

  export type FieldUpdateWithoutFieldProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUpdateManyWithoutFieldNestedInput
    characters?: CharacterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutFieldProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFieldNestedInput
    scores?: LeaderBoardUncheckedUpdateManyWithoutFieldNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type ImageUpsertWithoutImageProgressInput = {
    update: XOR<ImageUpdateWithoutImageProgressInput, ImageUncheckedUpdateWithoutImageProgressInput>
    create: XOR<ImageCreateWithoutImageProgressInput, ImageUncheckedCreateWithoutImageProgressInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutImageProgressInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutImageProgressInput, ImageUncheckedUpdateWithoutImageProgressInput>
  }

  export type ImageUpdateWithoutImageProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutImagesNestedInput
    characters?: CharacterUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutImageProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutImageNestedInput
  }

  export type LeaderBoardCreateManyUserInput = {
    id?: string
    timeTaken: number
    fieldId: string
    createdAt?: Date | string
  }

  export type UserFieldProgressCreateManyUserInput = {
    id?: string
    fieldId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type LeaderBoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutScoresNestedInput
  }

  export type LeaderBoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    fieldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
    field?: FieldUpdateOneRequiredWithoutFieldProgressNestedInput
    image?: ImageUpdateOneWithoutImageProgressNestedInput
  }

  export type UserFieldProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type ImageCreateManyFieldInput = {
    id?: string
    imageUrl: string
    order: number
    createdAt?: Date | string
  }

  export type LeaderBoardCreateManyFieldInput = {
    id?: string
    userId: string
    timeTaken: number
    createdAt?: Date | string
  }

  export type UserFieldProgressCreateManyFieldInput = {
    id?: string
    userId: string
    currentImageId?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type CharacterCreateManyFieldInput = {
    id?: string
    name: string
    imageId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type ImageUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUpdateManyWithoutImageNestedInput
    imageProgress?: UserFieldProgressUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterUncheckedUpdateManyWithoutImageNestedInput
    imageProgress?: UserFieldProgressUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type LeaderBoardUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderBoardUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeTaken?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFieldProgressUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
    user?: UserUpdateOneRequiredWithoutUserProgressNestedInput
    image?: ImageUpdateOneWithoutImageProgressNestedInput
  }

  export type UserFieldProgressUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentImageId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type CharacterUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
    Image?: ImageUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type CharacterUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type CharacterCreateManyImageInput = {
    id?: string
    name: string
    fieldId: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type UserFieldProgressCreateManyImageInput = {
    id?: string
    userId: string
    fieldId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    updatedAt?: Date | string
    completed?: boolean
    foundCharacters?: UserFieldProgressCreatefoundCharactersInput | string[]
  }

  export type CharacterUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
    Field?: FieldUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type CharacterUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    xMin?: FloatFieldUpdateOperationsInput | number
    xMax?: FloatFieldUpdateOperationsInput | number
    yMin?: FloatFieldUpdateOperationsInput | number
    yMax?: FloatFieldUpdateOperationsInput | number
  }

  export type UserFieldProgressUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
    user?: UserUpdateOneRequiredWithoutUserProgressNestedInput
    field?: FieldUpdateOneRequiredWithoutFieldProgressNestedInput
  }

  export type UserFieldProgressUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }

  export type UserFieldProgressUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    foundCharacters?: UserFieldProgressUpdatefoundCharactersInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}