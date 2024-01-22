/* eslint-disable */
export type Methods = {
  /** 認証されたユーザーが新しいタスクを作成します。 */
  post: {
    status: 201

    /** タスクが正常に作成されました。 */
    resBody: {
      id: number
      title: string
      content: string
      userId: string
    }

    reqBody: {
      title: string
      content: string
    }
  }
}
