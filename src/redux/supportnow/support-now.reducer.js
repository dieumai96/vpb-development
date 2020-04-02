import { SUPPORT_NOW_SEGEMENT_TYPE, SUPPORT_NOW_GET_NO_TYPE_SUCCESS, SUPPORT_NOW_GET_NO_TYPE, SUPPORT_NOW_GET_NO_TYPE_FAIL, SUPPORT_NOW_GET_HAS_TYPE_SUCCESS, SUPPORT_NOW_GET_HAS_TYPE_FAIL, SUPPORT_NOW_GET_MENU_SUCCESS, SUPPORT_NOW_GET_MENU_FAIL, SUPPORT_NOW_RESET_SEGMENT, SUPPORT_NOW_ADD_TAG, SUPPORT_NOW_REMOVE_TAG, SUPPORT_NOW_UPDATE_MENU_CHECKBOX_STATE } from "./support-now.type";
import * as uuid from 'uuid';

const initialState = {
  segementType: null,
  supportNoType: {},
  supportHasType: {},
  supportNowMenu: [],
  tagList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORT_NOW_SEGEMENT_TYPE: {
      let newMenu = [...resetAllMenuActive(state.supportNowMenu)];
      return {
        ...state,
        segementType: action.payload,
        tagList: [],
        supportNowMenu: newMenu
      }
    }

    case SUPPORT_NOW_RESET_SEGMENT: {
      let newMenu = [...resetAllMenuActive(state.supportNowMenu)];
      return {
        ...state,
        segementType: null,
        tagList: [],
        supportNowMenu: newMenu
      }
    }

    case SUPPORT_NOW_GET_NO_TYPE_SUCCESS: {
      return {
        ...state,
        supportNoType: action.payload
      }
    }
    case SUPPORT_NOW_GET_NO_TYPE_FAIL: {
      return {
        ...state,
        supportNoType: {},
      }
    }
    case SUPPORT_NOW_GET_HAS_TYPE_SUCCESS: {
      return {
        ...state,
        supportHasType: action.payload
      }
    }
    case SUPPORT_NOW_GET_HAS_TYPE_FAIL: {
      return {
        ...state,
        supportHasType: {},
      }
    }

    case SUPPORT_NOW_GET_MENU_SUCCESS: {
      let listMenuItem = [...customListMenuItem(action.payload)];
      return {
        ...state,
        supportNowMenu: listMenuItem,
      }
    }
    case SUPPORT_NOW_GET_MENU_FAIL: {
      return {
        ...state,
        supportNowMenu: [],
      }
    }

    case SUPPORT_NOW_ADD_TAG: {
      let newTagList = [...state.tagList];
      if (action?.payload?.type == 'parent') {
        newTagList = [...newTagList, ...addParentTag(action.payload, state.supportNowMenu)];
      } else {
        newTagList = [...addTagChild(action.payload, state.tagList, state.supportNowMenu)];
      }
      return {
        ...state,
        tagList: newTagList,
      }
    }

    case SUPPORT_NOW_REMOVE_TAG: {
      let newTagList = [...state.tagList];
      const { payload } = action;
      if (payload?.type == 'parent') {
        newTagList = newTagList.filter(item => item.parentId != payload?.parentId)
      } else {
        newTagList = [...removeTagChild(payload?.tagId, payload?.parentId, newTagList)];
        const findSameParentId = newTagList.filter(item => item.parentId == payload?.parentId);
        // INFO : if user remove all child item be longs to one parent => need remove this parent
        if (findSameParentId?.length == 1) {
          newTagList = newTagList.filter(item => item.parentId != payload?.parentId);
        }
      }
      return {
        ...state,
        tagList: newTagList,
      }
    }

    case SUPPORT_NOW_UPDATE_MENU_CHECKBOX_STATE: {
      let tagList = [...state.tagList];
      let menuList = [...state.supportNowMenu];
      let newMenu = [...getParentIdChosen(tagList, menuList)];
      newMenu = [...getChildIdChosen(tagList, newMenu)];
      return {
        ...state,
        supportNowMenu: newMenu,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

function customListMenuItem(listMenuItem) {
  if (listMenuItem?.length) {
    listMenuItem.forEach(item => {
      const idAutomatic = uuid.v4();
      item.parentId = idAutomatic;
      if (item?.TagItems?.length) {
        item.TagItems.forEach(childItem => {
          childItem.parentId = idAutomatic;
        })
      }
      delete item.CustomerType;
    });
  }
  return listMenuItem;
}

function addParentTag(tag, menuList) {
  let tagList = [];
  const findParent = findParentTag(tag.parentId, menuList);
  if (findParent) {
    tagList.push({
      Title: findParent?.Title,
      parentId: findParent?.parentId,
    });
    if (findParent?.TagItems?.length) {
      findParent.TagItems.forEach(item => {
        tagList.push(item);
      })
    }
  }
  return tagList;
}

function findParentTag(parentId, menuList) {
  return menuList.find(item => item.parentId == parentId);
}

function addTagChild({ parentId, tagId, title }, tagList, supportNowMenu) {
  const isTagListHasParent = tagList.find(item => item.parentId == parentId);
  let newTagList = [...tagList];
  if (!isTagListHasParent) {
    const findParent = findParentTag(parentId, supportNowMenu);
    newTagList.push({
      Title: findParent?.Title,
      parentId: findParent?.parentId,
    });
  }
  newTagList.push({
    Title: title,
    TagId: tagId,
    parentId,
  });
  return newTagList;
}

function removeTagChild(tagChildId, parentId, tagList) {
  // INFO : if haven't tagChildId => this is parent tag => need remove this and child items be long this
  let newTagList = tagList.filter(item => tagChildId == undefined ? item.parentId != parentId : item.TagId !== tagChildId)
  return newTagList;
}

function getParentIdChosen(tagList, menuList) {
  let parentIdList = [];
  tagList.forEach(item => {
    if (!parentIdList.includes(item.parentId)) {
      parentIdList.push(item.parentId);
    }
  })
  let newMenuList = [...menuList];
  newMenuList.forEach(item => {
    if (parentIdList.includes(item.parentId)) {
      item.isActive = true;
    } else {
      delete item.isActive;
    }
  })
  return newMenuList || [];
}

function getChildIdChosen(tagList, menuList) {

  let childIdList = [];
  tagList.forEach(item => {
    if (item?.TagId) {
      childIdList.push(item?.TagId);
    }
  })
  let newMenuList = [...menuList];
  newMenuList.forEach(item => {
    item.TagItems.forEach(itemChild => {
      if (childIdList.includes(itemChild.TagId)) {
        itemChild.isActive = true;
      } else {
        delete itemChild.isActive;
      }
    })
  })
  return newMenuList || [];
}

function resetAllMenuActive(menuList) {
  menuList.forEach(item => {
    delete item?.isActive;
    item.TagItems.forEach(itemChild => {
      delete itemChild?.isActive;
    })
  })
  return menuList;
}
export default reducer;