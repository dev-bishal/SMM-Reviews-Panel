// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "panels-datatable",
    columns: [
      { name: "panelTitle", type: "string" },
      { name: "panelWebsiteURL", type: "string" },
      { name: "panelAPILink", type: "string" },
      { name: "panelAPIKey", type: "string" },
      {
        name: "paneFeaturedImage",
        type: "file",
        file: { defaultPublicAccess: true },
      },
      { name: "panelSlug", type: "string", unique: true },
      { name: "panelTextDescrition", type: "text" },
      { name: "rating", type: "int" },
      { name: "paymentOptions", type: "json" },
      { name: "servicesList", type: "json" },
    ],
  },
  {
    name: "pages",
    columns: [
      { name: "pageTitle", type: "string" },
      { name: "pageContent", type: "text" },
      { name: "PageDescription", type: "text" },
      { name: "pageSlug", type: "string", unique: true },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "username", type: "string", unique: true },
      {
        name: "password",
        type: "string",
        notNull: true,
        defaultValue: "new_pass",
      },
      { name: "email", type: "string", unique: true },
      { name: "fullName", type: "string" },
      { name: "role", type: "string" },
      { name: "ProfilePic", type: "file", file: { defaultPublicAccess: true } },
    ],
  },
  {
    name: "contact_msgs",
    columns: [
      { name: "username", type: "string" },
      { name: "email", type: "string" },
      { name: "message", type: "text" },
      { name: "status", type: "string", defaultValue: "unread" },
    ],
  },
  {
    name: "services",
    columns: [
      { name: "serviceTitle", type: "string" },
      {
        name: "serviceLogo",
        type: "file",
        file: { defaultPublicAccess: true },
      },
      { name: "serviceColor", type: "string" },
    ],
  },
  {
    name: "siteSettings",
    columns: [
      { name: "SiteTitle", type: "string" },
      { name: "siteMetaDescription", type: "string" },
      {
        name: "siteFavicon",
        type: "file",
        file: { defaultPublicAccess: true },
      },
      { name: "siteLog", type: "file", file: { defaultPublicAccess: true } },
      {
        name: "homeBackgroundImage",
        type: "file",
        file: { defaultPublicAccess: true },
      },
      { name: "homeHeaderText", type: "string" },
      { name: "homeHeaderPara", type: "text" },
      { name: "homePanelCount", type: "int" },
      { name: "platformServiceCount", type: "int" },
    ],
  },
  {
    name: "sidebarWidgets",
    columns: [{ name: "widgetCodeBlock", type: "text" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type PanelsDatatable = InferredTypes["panels-datatable"];
export type PanelsDatatableRecord = PanelsDatatable & XataRecord;

export type Pages = InferredTypes["pages"];
export type PagesRecord = Pages & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type ContactMsgs = InferredTypes["contact_msgs"];
export type ContactMsgsRecord = ContactMsgs & XataRecord;

export type Services = InferredTypes["services"];
export type ServicesRecord = Services & XataRecord;

export type SiteSettings = InferredTypes["siteSettings"];
export type SiteSettingsRecord = SiteSettings & XataRecord;

export type SidebarWidgets = InferredTypes["sidebarWidgets"];
export type SidebarWidgetsRecord = SidebarWidgets & XataRecord;

export type DatabaseSchema = {
  "panels-datatable": PanelsDatatableRecord;
  pages: PagesRecord;
  users: UsersRecord;
  contact_msgs: ContactMsgsRecord;
  services: ServicesRecord;
  siteSettings: SiteSettingsRecord;
  sidebarWidgets: SidebarWidgetsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Bishal-Biswas-s-workspace-rug17p.eu-central-1.xata.sh/db/SMMPanels-db",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
