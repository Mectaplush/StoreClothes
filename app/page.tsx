import { headerHtml, mainHtml, dialogHtml } from '@/lib/runway-markup';

export default function Page() {
  return (
    <>
      <header
        className="site-header shopify-section-group-header-group"
        dangerouslySetInnerHTML={{ __html: headerHtml }}
      />
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <dialog
        id="bag-dialog"
        dangerouslySetInnerHTML={{ __html: dialogHtml }}
      />
      <div id="bag-status" role="status" aria-live="polite" />
      <script src="/app.js" defer />
    </>
  );
}
