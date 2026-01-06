import React, { useState } from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, config }) => {
  const getInitialValues = () => {
    const values = {};
    config.fields.forEach((field) => {
      if (data[field.name] !== undefined) {
        values[field.name] = data[field.name];
      } else if (typeof field.defaultValue === 'function') {
        values[field.name] = field.defaultValue(id);
      } else {
        values[field.name] = field.defaultValue;
      }
    });
    return values;
  };

  const [fieldValues, setFieldValues] = useState(getInitialValues());

  const handleFieldChange = (fieldName, value) => {
    setFieldValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const renderField = (field) => {
    const value = fieldValues[field.name] || "";

    if (field.type === "text") {
      return (
        <label key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {field.label}
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={{
              padding: '8px 10px',
              border: '1.5px solid #E2E8F0',
              borderRadius: '6px',
              fontSize: '13px',
              background: '#F8FAFC',
              transition: 'all 0.15s ease',
              outline: 'none',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563EB';
              e.target.style.background = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E2E8F0';
              e.target.style.background = '#F8FAFC';
            }}
          />
        </label>
      );
    }

    if (field.type === "select") {
      return (
        <label key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {field.label}
          </span>
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={{
              padding: '8px 10px',
              border: '1.5px solid #E2E8F0',
              borderRadius: '6px',
              fontSize: '13px',
              background: '#F8FAFC',
              cursor: 'pointer',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      );
    }

    if (field.type === "textarea") {
      return (
        <label key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {field.label}
          </span>
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            rows={Math.max(3, Math.min(10, value.split("\n").length))}
            style={{
              width: "100%",
              padding: '8px 10px',
              border: '1.5px solid #E2E8F0',
              borderRadius: '6px',
              fontSize: '13px',
              resize: "vertical",
              fontFamily: "monospace",
              background: '#F8FAFC',
              outline: 'none',
              transition: 'all 0.15s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563EB';
              e.target.style.background = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E2E8F0';
              e.target.style.background = '#F8FAFC';
            }}
          />
        </label>
      );
    }

    return null;
  };

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '8px',
      padding: '14px',
      background: '#FFFFFF',
      minWidth: '240px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.12)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.08)'}
    >
      {/* Node Title */}
      <div style={{
        fontWeight: '600',
        marginBottom: '14px',
        fontSize: '13px',
        color: '#0F172A',
        letterSpacing: '0.3px',
        textTransform: 'uppercase'
      }}>
        {config.label}
      </div>

      {/* Render Handles */}
      {config.handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={typeof handle.id === 'function' ? handle.id(id) : handle.id}
          style={{
            width: '10px',
            height: '10px',
            background: handle.type === 'source' ? '#10B981' : '#2563EB',
            border: '2px solid white',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
            ...handle.style
          }}
        />
      ))}

      {/* Render Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {config.fields.map((field) => renderField(field))}
      </div>
    </div>
  );
};
