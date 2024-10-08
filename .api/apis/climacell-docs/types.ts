import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AddInsightTagsBodyParam = FromSchema<typeof schemas.AddInsightTags.body>;
export type AddInsightTagsMetadataParam = FromSchema<typeof schemas.AddInsightTags.metadata>;
export type AddInsightTagsResponse204 = FromSchema<typeof schemas.AddInsightTags.response['204']>;
export type AddInsightTagsResponse400 = FromSchema<typeof schemas.AddInsightTags.response['400']>;
export type AddLocationTagsBodyParam = FromSchema<typeof schemas.AddLocationTags.body>;
export type AddLocationTagsMetadataParam = FromSchema<typeof schemas.AddLocationTags.metadata>;
export type AddLocationTagsResponse204 = FromSchema<typeof schemas.AddLocationTags.response['204']>;
export type AddLocationTagsResponse400 = FromSchema<typeof schemas.AddLocationTags.response['400']>;
export type DeleteAlertsIdMetadataParam = FromSchema<typeof schemas.DeleteAlertsId.metadata>;
export type DeleteAlertsIdResponse204 = FromSchema<typeof schemas.DeleteAlertsId.response['204']>;
export type DeleteInsightsIdMetadataParam = FromSchema<typeof schemas.DeleteInsightsId.metadata>;
export type DeleteInsightsIdResponse204 = FromSchema<typeof schemas.DeleteInsightsId.response['204']>;
export type DeleteLocationsIdMetadataParam = FromSchema<typeof schemas.DeleteLocationsId.metadata>;
export type DeleteLocationsIdResponse204 = FromSchema<typeof schemas.DeleteLocationsId.response['204']>;
export type EventsTimelineBodyParam = FromSchema<typeof schemas.EventsTimeline.body>;
export type EventsTimelineResponse200 = FromSchema<typeof schemas.EventsTimeline.response['200']>;
export type EventsTimelineResponse400 = FromSchema<typeof schemas.EventsTimeline.response['400']>;
export type GetAlertsIdMetadataParam = FromSchema<typeof schemas.GetAlertsId.metadata>;
export type GetAlertsIdResponse200 = FromSchema<typeof schemas.GetAlertsId.response['200']>;
export type GetAlertsMetadataParam = FromSchema<typeof schemas.GetAlerts.metadata>;
export type GetAlertsResponse200 = FromSchema<typeof schemas.GetAlerts.response['200']>;
export type GetEventsMetadataParam = FromSchema<typeof schemas.GetEvents.metadata>;
export type GetEventsResponse200 = FromSchema<typeof schemas.GetEvents.response['200']>;
export type GetInsightsIdMetadataParam = FromSchema<typeof schemas.GetInsightsId.metadata>;
export type GetInsightsIdResponse200 = FromSchema<typeof schemas.GetInsightsId.response['200']>;
export type GetInsightsMetadataParam = FromSchema<typeof schemas.GetInsights.metadata>;
export type GetInsightsResponse200 = FromSchema<typeof schemas.GetInsights.response['200']>;
export type GetLocationsIdMetadataParam = FromSchema<typeof schemas.GetLocationsId.metadata>;
export type GetLocationsIdResponse200 = FromSchema<typeof schemas.GetLocationsId.response['200']>;
export type GetLocationsMetadataParam = FromSchema<typeof schemas.GetLocations.metadata>;
export type GetLocationsResponse200 = FromSchema<typeof schemas.GetLocations.response['200']>;
export type ListNotificationsGetMetadataParam = FromSchema<typeof schemas.ListNotificationsGet.metadata>;
export type ListNotificationsGetResponse200 = FromSchema<typeof schemas.ListNotificationsGet.response['200']>;
export type PostAlertsBodyParam = FromSchema<typeof schemas.PostAlerts.body>;
export type PostAlertsIdActivateMetadataParam = FromSchema<typeof schemas.PostAlertsIdActivate.metadata>;
export type PostAlertsIdActivateResponse204 = FromSchema<typeof schemas.PostAlertsIdActivate.response['204']>;
export type PostAlertsIdDeactivateMetadataParam = FromSchema<typeof schemas.PostAlertsIdDeactivate.metadata>;
export type PostAlertsIdDeactivateResponse204 = FromSchema<typeof schemas.PostAlertsIdDeactivate.response['204']>;
export type PostAlertsIdLocationsLinkBodyParam = FromSchema<typeof schemas.PostAlertsIdLocationsLink.body>;
export type PostAlertsIdLocationsLinkMetadataParam = FromSchema<typeof schemas.PostAlertsIdLocationsLink.metadata>;
export type PostAlertsIdLocationsLinkResponse204 = FromSchema<typeof schemas.PostAlertsIdLocationsLink.response['204']>;
export type PostAlertsIdLocationsMetadataParam = FromSchema<typeof schemas.PostAlertsIdLocations.metadata>;
export type PostAlertsIdLocationsResponse200 = FromSchema<typeof schemas.PostAlertsIdLocations.response['200']>;
export type PostAlertsIdLocationsUnlinkBodyParam = FromSchema<typeof schemas.PostAlertsIdLocationsUnlink.body>;
export type PostAlertsIdLocationsUnlinkMetadataParam = FromSchema<typeof schemas.PostAlertsIdLocationsUnlink.metadata>;
export type PostAlertsIdLocationsUnlinkResponse204 = FromSchema<typeof schemas.PostAlertsIdLocationsUnlink.response['204']>;
export type PostAlertsMetadataParam = FromSchema<typeof schemas.PostAlerts.metadata>;
export type PostAlertsResponse200 = FromSchema<typeof schemas.PostAlerts.response['200']>;
export type PostEventsBodyParam = FromSchema<typeof schemas.PostEvents.body>;
export type PostEventsMetadataParam = FromSchema<typeof schemas.PostEvents.metadata>;
export type PostEventsResponse200 = FromSchema<typeof schemas.PostEvents.response['200']>;
export type PostInsightsBodyParam = FromSchema<typeof schemas.PostInsights.body>;
export type PostInsightsMetadataParam = FromSchema<typeof schemas.PostInsights.metadata>;
export type PostInsightsResponse201 = FromSchema<typeof schemas.PostInsights.response['201']>;
export type PostLocationsBodyParam = FromSchema<typeof schemas.PostLocations.body>;
export type PostLocationsMetadataParam = FromSchema<typeof schemas.PostLocations.metadata>;
export type PostLocationsResponse200 = FromSchema<typeof schemas.PostLocations.response['200']>;
export type PutAlertsIdBodyParam = FromSchema<typeof schemas.PutAlertsId.body>;
export type PutAlertsIdMetadataParam = FromSchema<typeof schemas.PutAlertsId.metadata>;
export type PutAlertsIdResponse200 = FromSchema<typeof schemas.PutAlertsId.response['200']>;
export type PutInsightsIdBodyParam = FromSchema<typeof schemas.PutInsightsId.body>;
export type PutInsightsIdMetadataParam = FromSchema<typeof schemas.PutInsightsId.metadata>;
export type PutInsightsIdResponse200 = FromSchema<typeof schemas.PutInsightsId.response['200']>;
export type PutLocationIdBodyParam = FromSchema<typeof schemas.PutLocationId.body>;
export type PutLocationIdMetadataParam = FromSchema<typeof schemas.PutLocationId.metadata>;
export type PutLocationIdResponse200 = FromSchema<typeof schemas.PutLocationId.response['200']>;
export type RemoveInsightTagsBodyParam = FromSchema<typeof schemas.RemoveInsightTags.body>;
export type RemoveInsightTagsMetadataParam = FromSchema<typeof schemas.RemoveInsightTags.metadata>;
export type RemoveInsightTagsResponse204 = FromSchema<typeof schemas.RemoveInsightTags.response['204']>;
export type RemoveInsightTagsResponse400 = FromSchema<typeof schemas.RemoveInsightTags.response['400']>;
export type RemoveLocationTagsBodyParam = FromSchema<typeof schemas.RemoveLocationTags.body>;
export type RemoveLocationTagsMetadataParam = FromSchema<typeof schemas.RemoveLocationTags.metadata>;
export type RemoveLocationTagsResponse204 = FromSchema<typeof schemas.RemoveLocationTags.response['204']>;
export type RemoveLocationTagsResponse400 = FromSchema<typeof schemas.RemoveLocationTags.response['400']>;
