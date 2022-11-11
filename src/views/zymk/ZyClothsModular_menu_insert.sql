-- 注意：该页面对应的前台目录为views/zymk文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022110708261230340', NULL, '制衣模块表', '/zymk/zyClothsModularList', 'zymk/ZyClothsModularList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230341', '2022110708261230340', '添加制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230342', '2022110708261230340', '编辑制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230343', '2022110708261230340', '删除制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230344', '2022110708261230340', '批量删除制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230345', '2022110708261230340', '导出excel_制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022110708261230346', '2022110708261230340', '导入excel_制衣模块表', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.demo:zy_cloths_modular:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-11-07 20:26:34', NULL, NULL, 0, 0, '1', 0);