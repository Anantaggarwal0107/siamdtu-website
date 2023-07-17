export interface IAppPath{
    path:string;
    component:JSX.Element;
}

export interface ITeamDetails{
    name:string;
    link:string;
    designation:string;
    linkedin:string;
}

export type NavbarTypes = 'mobile-navbar' | 'navbar';

export interface ISelectCardProps{
    customStyle:boolean;
    text:string;
}

export interface ISeriesData{
    title:string;
    link:string;
    font:string;
}

export interface IPostCardProps{
    link:string;
    font:string;
    title:string;
    isCP:boolean;
}

export interface IContentProps{
    isCP:boolean;
}

export interface IEventHeroProps{
    yearwiseEvents:IEventCardProps[];
}

export interface IEventCardProps{
    cardTitle:string;
    eventData:IEventContentData[];
    colorType?:boolean;
}

export interface IEventContentList{
    type:'ul'|'ol';
    listTitle:string;
    listItems:string[];
}

export interface IEventContentData{
    contentTitle:string;
    contentList:string[];
    photoLink:string;
    date?:string;
    additionalList?:IEventContentList[];
}

export interface IImageDivProps{
    imageLink:string;
    imageAlt:string;
}

export interface IContentDivProps{
    title:string;
    contentList:string[];
    date?:string;
    additionalList?:IEventContentList[];
}