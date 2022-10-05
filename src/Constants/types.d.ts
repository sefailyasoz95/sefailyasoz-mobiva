export type RedditChild = {
  kind: string;
  data: {
    approved_at_utc: null | string;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: null | string;
    gilded: number;
    clicked: boolean;
    title: string;
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null | string;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: null | string;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: null | string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    thumbnail_width: number;
    author_flair_template_id: null | string;
    is_original_content: boolean;
    secure_media: null | string;
    category: null | string;
    score: number;
    approved_by: null | string;
    author_premium: boolean;
    thumbnail: string;
    permalink: string;
    edited: boolean;
    is_self: boolean;
    created: number;
    likes: null | string;
    view_count: null | string;
    over_18: boolean;
    url: string;
    subreddit_subscribers: number;
    media: null | string;
    is_video: boolean;
    num_comments: number;
  };
};
export type RedditAPIResponse = {
  kind: string;
  data: {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: null | string;
    children: RedditChild[];
    before: string;
  };
};

export type GetPostsParams = {
  limit: number;
  after?: string;
};
