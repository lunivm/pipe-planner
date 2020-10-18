import { http } from '../core/http';

export const getAllBuckets = criteria => http.get('/buckets', {criteria});
