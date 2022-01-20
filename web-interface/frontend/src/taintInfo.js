import React from 'react';

import convertSyscallNrToName from './ConvertSyscallNrToName';

function renderTaintInfo(taint_info, includeSyscallArgs) {
  const { syscall_nr, syscall_arg_nr } = taint_info;
  if (syscall_nr != null) {
    const syscall = convertSyscallNrToName(syscall_nr);
    if (includeSyscallArgs) {
      const syscall_arg_index = parseInt(syscall_arg_nr);
      const { types } = syscall;
      let typesRender = null;
      if (types.length > syscall_arg_index) {
        typesRender = types.map((type, index) => {
          const suffix = index === types.length -1 ? '': ', ';
          if (index === syscall_arg_index) {
            return <b>{type.type}{suffix}</b>;
          }
          return `${type.type}${suffix}`;
        })
      }
      return <>{syscall.name}({typesRender})</>;
    }
    return syscall.name;
  } else {
    return Object.keys(taint_info)[0];
  }
}

export default renderTaintInfo;
