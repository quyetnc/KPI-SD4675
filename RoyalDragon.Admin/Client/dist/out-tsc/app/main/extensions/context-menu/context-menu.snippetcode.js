export const snippetCodeBasicRight = {
    html: `<button class="btn btn-primary" [contextMenuTrigger]="menu" type="button" rippleEffect> Right Click on Me </button>`,
    ts: `
  import { BasicCustomContextMenuComponent } from './custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';

  public contextMenu = BasicCustomContextMenuComponent;`
};
export const snippetCodeAnimatedRight = {
    html: `<button class="btn btn-primary" [contextMenuTrigger]="animatedMenu" type="button" rippleEffect>Right Click on Me </button>`,
    ts: `
  import { AnimatedCustomContextMenuComponent } from './custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';

  public animatedcontextMenu = AnimatedCustomContextMenuComponent;`
};
export const snippetCodeSubMenuRight = {
    html: `
<button class="btn btn-outline-primary" [contextMenuTrigger]="subMenuContextMenu" type="button" rippleEffect>
  Right Click on Me
</button>`,
    ts: `
  import { SubMenuCustomContextMenuComponent } from 'app/main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';

  public subMenuContextMenu = SubMenuCustomContextMenuComponent;
  `
};
//# sourceMappingURL=context-menu.snippetcode.js.map