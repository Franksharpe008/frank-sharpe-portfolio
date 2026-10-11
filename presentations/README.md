# Working systems presentation

A standalone static entry page for Frank D. Sharpe's three existing narrated systems. Responsive styles are inline and use system font fallbacks, so a failed stylesheet or font request cannot remove the page layout. Public video, poster and caption files are served from the existing systems host.

The page reads an invitation from the URL fragment and prepares the access form without automatically leaving the presentation. Opening the workspace hands the existing invitation to the original service; its application access, expiry, scopes and saved reviewer records stay with that service. No invitation codes are committed here.

## Hosting

The source in this directory was deployed as the Vercel project frank-sharpe-presentations. The initial Git project connection failed, so the successful deployment used a source-file snapshot. Commit changes here and deploy this directory to update it.

The original flagship project's exact home path also has a versioned external rewrite to this project's /legacy-root page. That file preserves the original invitation-redemption behavior and relative application endpoints while supplying inline styles. Other original routes are served by their existing deployment.

## Verification on October 11, 2026

- Visually checked the live page on desktop and in 390px and 320px frames; checked a 1024px frame. All three sections and inline styles were present, and document width matched viewport width without horizontal overflow.
- Played all three videos and verified advancing playback, readyState 4 and no media errors.
- Followed an existing invitation through the corrected presentation and opened the production, opportunity and workforce review applications with fictional records.
- Verified that the original home path serves the inline-styled page and its existing invitation reaches the private workspace.
- Tested the exact corrected invitation URL before it was shared.

The mobile checks used Chromium at phone widths, not a physical iPhone or Safari session. The page's /layout-check route reproduces the layout checks without including a private invitation.
