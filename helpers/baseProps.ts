export interface BaseComponentProps {
    /** Sets the width property. */
    w?: string | number,
    /** Sets the height property. */
    h?: string | number,
    /** Sets the max-width property. */
    mw?: string | number,
    /** Sets the max-height property. */
    mh?: string | number,
    /** Sets the margin short-hand property. */
    m?: string | number,
    /** Sets the padding short-hand property. */
    p?: string | number,
    /** Sets the margin-top property. */
    mt?: string | number,
    /** Sets the margin-bottom property. */
    mb?: string | number,
    /** Sets the margin-left property. */
    ml?: string | number,
    /** Sets the margin-right property. */
    mr?: string | number,
    /** Sets the padding-top property. */
    pt?: string | number,
    /** Sets the padding-bottom property. */
    pb?: string | number,
    /** Sets the padding-left property. */
    pl?: string | number,
    /** Sets the padding-right property. */
    pr?: string | number,
    /** Sets the font-size property. */
    fs?: string | number,
    /** Sets the align-self property. */
    alignSelf?: string,
    /** Sets the color property. */
    color?: string,
    /** Sets the background-color property. */
    bgColor?: string,
    /** Sets the justify-content property. */
    jc?: string,
    /** Sets the cursor property. */
    cursor?: string,
    /** Sets the font-style property. */
    fst?: string,
    /** Sets the position property. */
    pos?: string,
    /** Sets the box-shadow property. */
    boxShadow?: string,
    /** Sets the top property. */
    top?: string | number,
    /** Sets the bottom property. */
    bottom?: string | number,
    /** Sets the left property. */
    left?: string | number,
    /** Sets the border-radius property. */
    borderRadius?: string | number,
}

export const getBaseComponentProps = (props: BaseComponentProps) => {

    return `
    ${props.cursor != null ? `cursor: ${props.cursor};` : ''}
    ${props.top != null ? `top: ${typeof props.top === 'number' ? `${props.top}px` : props.top};` : ''}
    ${props.bottom != null ? `bottom: ${typeof props.bottom === 'number' ? `${props.bottom}px` : props.bottom};` : ''}
    ${props.borderRadius != null ? `border-radius: ${typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius};` : ''}
    ${props.left != null ? `left: ${typeof props.left === 'number' ? `${props.left}px` : props.left};` : ''}
    ${props.boxShadow != null ? `box-shadow: ${props.boxShadow};` : ''}
    ${props.pos != null ? `position: ${props.pos};` : ''}
    ${props.fst != null ? `font-style: ${props.fst};` : ''}
    ${props.jc != null ? `justify-content: ${props.jc};` : ''}
    ${props.color != null ? `color: ${props.color};` : ''}
    ${props.bgColor != null ? `background-color: ${props.bgColor};` : ''}
    ${props.alignSelf != null ? `align-self: ${props.alignSelf};` : ''}
    ${props.fs != null ? `font-size: ${typeof props.fs === 'number' ? `${props.fs}px` : props.fs};` : ''}
    ${props.w != null ? `width: ${typeof props.w === 'number' ? `${props.w}px` : props.w};` : ''}
    ${props.h != null ? `height: ${typeof props.h === 'number' ? `${props.h}px` : props.h};` : ''}
    ${props.mw != null ? `max-width: ${typeof props.mw === 'number' ? `${props.mw}px` : props.mw};` : ''}
    ${props.mh != null ? `max-height: ${typeof props.mh === 'number' ? `${props.mh}px` : props.mh};` : ''}
    ${props.m != null ? `margin: ${typeof props.m === 'number' ? `${props.m}px ${props.m}px ${props.m}px ${props.m}px` : props.m};` : ''}
    ${props.p != null ? `padding: ${typeof props.p === 'number' ? `${props.p}px ${props.p}px ${props.p}px ${props.p}px;` : props.p};` : ''}
    ${props.pt != null ? `padding-top: ${typeof props.pt === 'number' ? `${props.pt}px` : props.pt};` : ''}
    ${props.pl != null ? `padding-left: ${typeof props.pl === 'number' ? `${props.pl}px` : props.pl};` : ''}
    ${props.pb != null ? `padding-bottom: ${typeof props.pb === 'number' ? `${props.pb}px` : props.pb};` : ''}
    ${props.pr != null ? `padding-right: ${typeof props.pr === 'number' ? `${props.pr}px` : props.pr};` : ''}    
    ${props.mt != null ? `margin-top: ${typeof props.mt === 'number' ? `${props.mt}px` : props.mt};` : ''}
    ${props.mb != null ? `margin-bottom: ${typeof props.mb === 'number' ? `${props.mb}px` : props.mb};` : ''}
    ${props.ml != null ? `margin-left: ${typeof props.ml === 'number' ? `${props.ml}px` : props.ml};` : ''}
    ${props.mr != null ? `margin-right: ${typeof props.mr === 'number' ? `${props.mr}px` : props.mr};` : ''}
    `
}