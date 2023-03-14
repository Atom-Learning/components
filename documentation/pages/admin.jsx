import * as React from "react";
import Head from "next/head";
import { ComponentPropsEditorComponent } from "~/components/admin/editor-component/ComponentPropsEditorComponent";
import { ColorTokenListEditorComponent } from "~/components/admin/editor-component/ColorTokenListEditorComponent";
import { IconTokenListEditorComponent } from "~/components/admin/editor-component/IconTokenListEditorComponent";
import { CodeBlockEditorComponent } from "~/components/admin/editor-component/CodeBlockEditorComponent";
import { SpaceTokenListEditorComponent } from "~/components/admin/editor-component/SpaceTokenListEditorComponent";
import { SizeTokenListEditorComponent } from "~/components/admin/editor-component/SizeTokenListEditorComponent";
import { FontFamilyTokenListEditorComponent } from "~/components/admin/editor-component/FontFamilyTokenListEditorComponent";
import { FontSizeTokenListEditorComponent } from "~/components/admin/editor-component/FontSizeTokenListEditorComponent";
import { RadiusTokenListEditorComponent } from "~/components/admin/editor-component/RadiusTokenListEditorComponent";
import { ShadowTokenListEditorComponent } from "~/components/admin/editor-component/ShadowTokenListEditorComponent";
import { DosAndDontsEditorComponent } from "~/components/admin/editor-component/DosAndDontsEditorComponent";
import { UuidWidget } from "~/components/admin/widget/UuidWidget";

const Admin = () => {
  React.useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();

      CMS.registerWidget([UuidWidget()]);

      CMS.registerEditorComponent(ComponentPropsEditorComponent);

      CMS.registerEditorComponent(ColorTokenListEditorComponent);

      CMS.registerEditorComponent(IconTokenListEditorComponent);

      CMS.registerEditorComponent(CodeBlockEditorComponent);

      CMS.registerEditorComponent(SpaceTokenListEditorComponent);

      CMS.registerEditorComponent(SizeTokenListEditorComponent);

      CMS.registerEditorComponent(FontFamilyTokenListEditorComponent);

      CMS.registerEditorComponent(FontSizeTokenListEditorComponent);

      CMS.registerEditorComponent(RadiusTokenListEditorComponent);

      CMS.registerEditorComponent(ShadowTokenListEditorComponent);

      CMS.registerEditorComponent(DosAndDontsEditorComponent);
    })();
  }, []);

  return (
    <>
      <Head>
        {/* (!) Style needed because of NetlifyCMS bug: https://github.com/netlify/netlify-cms/issues/5092#issuecomment-1246525269 */}
        <style>
          {`[data-slate-editor] {
            -webkit-user-modify: read-write !important;
          }`}
        </style>
      </Head>
      <div />
    </>
  );
};

Admin.displayName = "Admin";

export default Admin;
