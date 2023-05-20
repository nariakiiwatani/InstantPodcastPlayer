export const permalink = (rss_url: string, item_id?: string, base_url=window.origin) => {
	return item_id
	? `${base_url}?channel=${encodeURIComponent(rss_url)}&item=${encodeURIComponent(item_id)}`
	: `${base_url}?channel=${encodeURIComponent(rss_url)}`
};