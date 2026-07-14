import { z } from 'zod';
import {
  defineAtomsCatalog,
  defineAtomsRegistry,
  textFieldSchema,
  // richTextFieldSchema,
  // linkFieldSchema,
} from '@sitecore-content-sdk/nextjs/atoms';
import { shadcnComponentDefinitions } from '@json-render/shadcn/catalog';
import { shadcnComponents } from '@json-render/shadcn';
import { TextAtom } from 'src/atoms/components/TextAtom';
// Temporarily unused while Sitecore registry entries are disabled
// import { Heading } from 'src/atoms/components/Heading';
// import { RichTextBlock } from 'src/atoms/components/RichTextBlock';
// import { CtaLink } from 'src/atoms/components/CtaLink';
// import { HeroSection } from 'src/atoms/components/HeroSection';
// import { SitecoreActionButton } from 'src/atoms/components/SitecoreActionButton';
// import { SitecoreConditionalPanel } from 'src/atoms/components/SitecoreConditionalPanel';
// import { SitecorePageLayout } from 'src/atoms/components/SitecorePageLayout';
// import { SitecoreContentCard } from 'src/atoms/components/SitecoreContentCard';
import { customAtomActions } from 'src/atoms/registry-actions';

// const sitecoreFieldParents = [
//   'SitecorePageLayout',
//   'SitecoreHeroSection',
//   'SitecoreContentCard',
//   'SitecoreConditionalPanel',
//   'Stack',
//   'Card',
//   'Grid',
// ] as const;

export const catalog = defineAtomsCatalog({
  version: '1.0.5',
  components: {
    Card: {
      ...shadcnComponentDefinitions.Card,
      props: shadcnComponentDefinitions.Card.props.omit({ className: true }),
    },
    Stack: {
      ...shadcnComponentDefinitions.Stack,
      props: shadcnComponentDefinitions.Stack.props.omit({ className: true }),
    },
    Grid: {
      ...shadcnComponentDefinitions.Grid,
      props: shadcnComponentDefinitions.Grid.props.omit({ className: true }),
    },
    Separator: shadcnComponentDefinitions.Separator,
    Tabs: shadcnComponentDefinitions.Tabs,
    Accordion: shadcnComponentDefinitions.Accordion,
    Collapsible: shadcnComponentDefinitions.Collapsible,
    Dialog: shadcnComponentDefinitions.Dialog,
    Drawer: shadcnComponentDefinitions.Drawer,
    Carousel: shadcnComponentDefinitions.Carousel,
    Table: shadcnComponentDefinitions.Table,
    Heading: shadcnComponentDefinitions.Heading,
    Text: {
      props: z.object({
        text: textFieldSchema(),
      }),
      description: 'The Text component displays text content with various styling options.',
      example: {
        text: 'Sample text',
      },
    },
    Image: shadcnComponentDefinitions.Image,
    Avatar: shadcnComponentDefinitions.Avatar,
    Badge: shadcnComponentDefinitions.Badge,
    Alert: shadcnComponentDefinitions.Alert,
    Progress: shadcnComponentDefinitions.Progress,
    Skeleton: shadcnComponentDefinitions.Skeleton,
    Spinner: shadcnComponentDefinitions.Spinner,
    Tooltip: shadcnComponentDefinitions.Tooltip,
    Popover: shadcnComponentDefinitions.Popover,
    Input: shadcnComponentDefinitions.Input,
    Textarea: shadcnComponentDefinitions.Textarea,
    Select: shadcnComponentDefinitions.Select,
    Checkbox: shadcnComponentDefinitions.Checkbox,
    Radio: shadcnComponentDefinitions.Radio,
    Switch: shadcnComponentDefinitions.Switch,
    Slider: shadcnComponentDefinitions.Slider,
    Button: shadcnComponentDefinitions.Button,
    Link: shadcnComponentDefinitions.Link,
    DropdownMenu: shadcnComponentDefinitions.DropdownMenu,
    Toggle: shadcnComponentDefinitions.Toggle,
    ToggleGroup: shadcnComponentDefinitions.ToggleGroup,
    ButtonGroup: shadcnComponentDefinitions.ButtonGroup,
    Pagination: shadcnComponentDefinitions.Pagination,

    // Temporarily disabled — try standard actions + shadcn first
    // Custom Sitecore field-backed atoms (QA coverage: events, visibility, composition)
    // SitecorePageLayout: {
    //   version: '1.0.0',
    //   props: z.object({}),
    //   description: 'Top-level layout container for page composition and allowedChildren testing',
    //   slots: ['default'],
    //   allowedChildren: [
    //     'SitecoreHeroSection',
    //     'SitecoreConditionalPanel',
    //     'SitecoreContentCard',
    //     'Stack',
    //     'Grid',
    //     'Card',
    //   ],
    // },
    // SitecoreHeroSection: {
    //   version: '1.0.0',
    //   props: z.object({}),
    //   description: 'Hero container for Sitecore field atoms and shadcn layout children',
    //   slots: ['default'],
    //   allowedChildren: [
    //     'SitecoreHeading',
    //     'SitecoreRichText',
    //     'SitecoreCtaLink',
    //     'SitecoreActionButton',
    //     'SitecoreConditionalPanel',
    //     'Stack',
    //     'Card',
    //     'Button',
    //   ],
    //   allowedParents: ['SitecorePageLayout', 'Stack', 'Grid'],
    // },
    // SitecoreContentCard: {
    //   version: '1.0.0',
    //   props: z.object({
    //     title: textFieldSchema(),
    //   }),
    //   description: 'Card slot with allowedParents constraints for nested composition QA',
    //   slots: ['default'],
    //   allowedChildren: [
    //     'SitecoreHeading',
    //     'SitecoreRichText',
    //     'SitecoreCtaLink',
    //     'SitecoreActionButton',
    //     'Image',
    //     'Button',
    //     'Text',
    //   ],
    //   allowedParents: ['SitecorePageLayout', 'SitecoreHeroSection', 'Grid', 'Stack'],
    // },
    // SitecoreConditionalPanel: {
    //   version: '1.0.0',
    //   props: z.object({
    //     panelLabel: textFieldSchema(),
    //   }),
    //   description:
    //     'Wrapper for visibility (show) rule testing — attach show bindings on child elements in Design Studio',
    //   slots: ['default'],
    //   allowedChildren: [
    //     'SitecoreHeading',
    //     'SitecoreRichText',
    //     'SitecoreActionButton',
    //     'SitecoreCtaLink',
    //     'Text',
    //     'Button',
    //     'Badge',
    //   ],
    //   allowedParents: ['SitecorePageLayout', 'SitecoreHeroSection', 'Stack', 'Card'],
    // },
    // SitecoreHeading: {
    //   version: '1.0.0',
    //   props: z.object({ title: textFieldSchema() }),
    //   description: 'Sitecore text field heading',
    //   slots: ['default'],
    //   allowedParents: [...sitecoreFieldParents],
    // },
    // SitecoreRichText: {
    //   version: '1.0.0',
    //   props: z.object({ body: richTextFieldSchema() }),
    //   description: 'Sitecore rich text field block',
    //   slots: ['default'],
    //   allowedParents: [...sitecoreFieldParents],
    // },
    // SitecoreCtaLink: {
    //   version: '1.0.0',
    //   props: z.object({ cta: linkFieldSchema() }),
    //   description: 'Sitecore link field CTA — emits press for navigate / trackEvent bindings',
    //   slots: ['default'],
    //   events: ['press'],
    //   allowedParents: [...sitecoreFieldParents],
    // },
    // SitecoreActionButton: {
    //   version: '1.0.0',
    //   props: z.object({ label: textFieldSchema() }),
    //   description:
    //     'Custom action button — emits press; bind to validateForm, navigate, trackEvent, push, or setState',
    //   events: ['press'],
    //   allowedParents: [...sitecoreFieldParents],
    // },
  },
  actions: {
    navigate: {
      params: z.object({ path: z.string() }),
      description:
        'Route change via atomsConfig.navigate — bind Button on.press with onSuccess: { navigate: "/path" } (not action params)',
    },
    trackEvent: {
      params: z.object({
        eventName: z.string(),
        payload: z.string().optional(),
      }),
      description: 'Log a custom analytics event (dev console in local QA)',
    },
    push: {
      params: z.object({ screen: z.string() }),
      description: 'Built-in json-render screen push — updates /currentScreen and /navStack state',
    },
    pop: {
      description: 'Built-in json-render screen pop — restores previous /currentScreen from /navStack',
    },
    validateForm: {
      params: z.object({
        statePath: z.string().optional(),
      }),
      description:
        'Built-in json-render form validation — writes { valid, errors } to /formValidation or the supplied statePath',
    },
    submit: {
      params: z.object({
        formId: z.string(),
      }),
      description:
        'POST form state at /{formId} to /api/atoms/submit — bind after validateForm; fields should use $bindState under that formId (e.g. /contact/email)',
    },
  },
});

export const registry = defineAtomsRegistry(catalog, {
  components: {
    Card: shadcnComponents.Card,
    Stack: shadcnComponents.Stack,
    Grid: shadcnComponents.Grid,
    Separator: shadcnComponents.Separator,
    Tabs: shadcnComponents.Tabs,
    Accordion: shadcnComponents.Accordion,
    Collapsible: shadcnComponents.Collapsible,
    Dialog: shadcnComponents.Dialog,
    Drawer: shadcnComponents.Drawer,
    Carousel: shadcnComponents.Carousel,
    Table: shadcnComponents.Table,
    Heading: shadcnComponents.Heading,
    Text: TextAtom,
    Image: shadcnComponents.Image,
    Avatar: shadcnComponents.Avatar,
    Badge: shadcnComponents.Badge,
    Alert: shadcnComponents.Alert,
    Progress: shadcnComponents.Progress,
    Skeleton: shadcnComponents.Skeleton,
    Spinner: shadcnComponents.Spinner,
    Tooltip: shadcnComponents.Tooltip,
    Popover: shadcnComponents.Popover,
    Input: shadcnComponents.Input,
    Textarea: shadcnComponents.Textarea,
    Select: shadcnComponents.Select,
    Checkbox: shadcnComponents.Checkbox,
    Radio: shadcnComponents.Radio,
    Switch: shadcnComponents.Switch,
    Slider: shadcnComponents.Slider,
    Button: shadcnComponents.Button,
    Link: shadcnComponents.Link,
    DropdownMenu: shadcnComponents.DropdownMenu,
    Toggle: shadcnComponents.Toggle,
    ToggleGroup: shadcnComponents.ToggleGroup,
    ButtonGroup: shadcnComponents.ButtonGroup,
    Pagination: shadcnComponents.Pagination,

    // Temporarily disabled — try standard actions + shadcn first
    // SitecorePageLayout: SitecorePageLayout,
    // SitecoreHeroSection: HeroSection,
    // SitecoreContentCard: SitecoreContentCard,
    // SitecoreConditionalPanel: SitecoreConditionalPanel,
    // SitecoreHeading: Heading,
    // SitecoreRichText: RichTextBlock,
    // SitecoreCtaLink: CtaLink,
    // SitecoreActionButton: SitecoreActionButton,
  },
  actions: customAtomActions,
});
