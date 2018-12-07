export interface Users {
  total_count: number,
  incomplete_results: boolean,
  items: [
    {
      login: string,
      avatar_url: string,
      total_count: number,
    }
  ]
}