// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const appLayoutNotificationsStyles = css`
.app-layout-notifications--notifications,
.app-layout-notifications--notifications-sticky {
  z-index: 850;
}

.app-layout-notifications--notifications {
  /* This is necessary for the z-index to have effect */
  position: relative;
}

.app-layout-notifications--notifications-sticky {
  inset-block-start: 0;
  position: sticky;
  --awsui-flashbar-sticky-bottom-margin: var(--space-xxl, 32px);
}

.app-layout-notifications--no-content-paddings {
  /*
  When using the disableContentPaddings option, the Flashbar will use this custom property to add additional space
  when the notification bar is rendered, to prevent it from overlapping the content.
   */
  --awsui-stacked-notifications-bottom-margin: var(--space-scaled-l, 20px);
}
`;
