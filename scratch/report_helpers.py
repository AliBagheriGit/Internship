# -*- coding: utf-8 -*-
"""
Generator script for Sharif_Clinic_Internship_Report.docx
Creates an authentic, comprehensive, rigorous 30-page academic internship report
for Sharif University of Technology (Department of Computer Engineering).
"""

import os
import sys
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def apply_run_font(run, font_name="Vazirmatn", size_pt=10.5, bold=False, italic=False, color_rgb=(30, 41, 59)):
    run.font.name = font_name
    run.font.size = Pt(size_pt)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = RGBColor(*color_rgb)
    rPr = run._r.get_or_add_rPr()
    rFonts = parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="{font_name}" w:hAnsi="{font_name}" w:cs="{font_name}"/>')
    rPr.append(rFonts)
    rtl = parse_xml(f'<w:rtl {nsdecls("w")}/>')
    rPr.append(rtl)

def apply_latin_font(run, font_name="Calibri", size_pt=10.5, bold=False, italic=False, color_rgb=(30, 41, 59)):
    run.font.name = font_name
    run.font.size = Pt(size_pt)
    run.font.bold = bold
    run.font.italic = italic
    run.font.color.rgb = RGBColor(*color_rgb)
    rPr = run._r.get_or_add_rPr()
    rFonts = parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="{font_name}" w:hAnsi="{font_name}" w:cs="Vazirmatn"/>')
    rPr.append(rFonts)

def set_cell_margins(cell, top=100, bottom=100, left=140, right=140):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}>'
                      f'<w:top w:w="{top}" w:type="dxa"/>'
                      f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
                      f'<w:left w:w="{left}" w:type="dxa"/>'
                      f'<w:right w:w="{right}" w:type="dxa"/>'
                      f'</w:tcMar>')
    tcPr.append(tcMar)

def set_cell_shading(cell, color_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color_hex}"/>')
    tcPr.append(shd)

def set_table_rtl(table):
    tblPr = table._tbl.tblPr
    bidi = parse_xml(f'<w:bidiVisual {nsdecls("w")}/>')
    tblPr.append(bidi)

def set_table_borders(table, color="CBD5E1", sz="4", val="single"):
    tblPr = table._tbl.tblPr
    tblBorders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:left w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:right w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'<w:insideV w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(tblBorders)

def add_p(doc, text="", bold_prefix="", size_pt=10.5, align=WD_ALIGN_PARAGRAPH.JUSTIFY, space_after=3.5, space_before=0, color_rgb=(30, 41, 59), line_spacing=1.15):
    p = doc.add_paragraph()
    p.paragraph_format.alignment = align
    p.paragraph_format.bidi = True
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.line_spacing = line_spacing
    if bold_prefix:
        r_pre = p.add_run(bold_prefix)
        apply_run_font(r_pre, size_pt=size_pt, bold=True, color_rgb=color_rgb)
    if text:
        r_text = p.add_run(text)
        apply_run_font(r_text, size_pt=size_pt, bold=False, color_rgb=color_rgb)
    return p

def add_heading_1(doc, text, space_before=8, space_after=6):
    p = doc.add_paragraph()
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.paragraph_format.bidi = True
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.15
    run = p.add_run(text)
    apply_run_font(run, size_pt=16, bold=True, color_rgb=(15, 53, 98)) # Deep Navy
    return p

def add_heading_2(doc, text, space_before=6, space_after=4):
    p = doc.add_paragraph()
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.paragraph_format.bidi = True
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.15
    run = p.add_run(text)
    apply_run_font(run, size_pt=13, bold=True, color_rgb=(13, 92, 117)) # Deep Teal/Cyan
    return p

def add_heading_3(doc, text, space_before=5, space_after=3):
    p = doc.add_paragraph()
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.paragraph_format.bidi = True
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.15
    run = p.add_run(text)
    apply_run_font(run, size_pt=11.5, bold=True, color_rgb=(30, 41, 59))
    return p

def add_bullet(doc, text, bold_prefix="", space_after=2.5):
    p = doc.add_paragraph()
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p.paragraph_format.bidi = True
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.line_spacing = 1.15
    p.paragraph_format.left_indent = Inches(0.2)
    
    r_bullet = p.add_run("• ")
    apply_run_font(r_bullet, size_pt=10.5, bold=True, color_rgb=(14, 116, 144))
    
    if bold_prefix:
        r_pre = p.add_run(bold_prefix)
        apply_run_font(r_pre, size_pt=10.5, bold=True, color_rgb=(30, 41, 59))
    if text:
        r_text = p.add_run(text)
        apply_run_font(r_text, size_pt=10.5, bold=False, color_rgb=(30, 41, 59))
    return p

def add_callout(doc, title, text_lines, bg_hex="F0FDF4", border_color="0D9488", border_sz="24"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_rtl(tbl)
    cell = tbl.cell(0, 0)
    set_cell_shading(cell, bg_hex)
    set_cell_margins(cell, top=80, bottom=80, left=140, right=140)
    
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
        f'<w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
        f'<w:bottom w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
        f'<w:right w:val="single" w:sz="{border_sz}" w:space="0" w:color="{border_color}"/>'
        f'</w:tcBorders>'
    )
    tcPr.append(tcBorders)
    
    # Title
    p_t = cell.paragraphs[0]
    p_t.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_t.paragraph_format.bidi = True
    p_t.paragraph_format.space_before = Pt(0)
    p_t.paragraph_format.space_after = Pt(2)
    r_t = p_t.add_run(f"📌 {title}")
    apply_run_font(r_t, size_pt=10.5, bold=True, color_rgb=(13, 92, 117))
    
    for line in text_lines:
        p_l = cell.add_paragraph()
        p_l.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        p_l.paragraph_format.bidi = True
        p_l.paragraph_format.space_before = Pt(0)
        p_l.paragraph_format.space_after = Pt(2)
        p_l.paragraph_format.line_spacing = 1.15
        r_l = p_l.add_run(line)
        apply_run_font(r_l, size_pt=10, bold=False, color_rgb=(30, 41, 59))
        
    p_space = doc.add_paragraph()
    p_space.paragraph_format.space_before = Pt(0)
    p_space.paragraph_format.space_after = Pt(2)

def add_code_box(doc, code_str, caption=""):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.cell(0, 0)
    set_cell_shading(cell, "0F172A") # Tailwind slate-900
    set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
    
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="single" w:sz="4" w:space="0" w:color="334155"/>'
        f'<w:left w:val="single" w:sz="4" w:space="0" w:color="334155"/>'
        f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="334155"/>'
        f'<w:right w:val="single" w:sz="16" w:space="0" w:color="38BDF8"/>'
        f'</w:tcBorders>'
    )
    tcPr.append(tcBorders)
    
    lines = code_str.strip().split("\n")
    for i, line in enumerate(lines):
        p = cell.paragraphs[0] if i == 0 else cell.add_paragraph()
        p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p.paragraph_format.bidi = False
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(1)
        p.paragraph_format.line_spacing = 1.05
        run = p.add_run(line)
        run.font.name = "Consolas"
        run.font.size = Pt(8.5)
        run.font.color.rgb = RGBColor(226, 232, 240)
        rPr = run._r.get_or_add_rPr()
        rFonts = parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="Consolas" w:hAnsi="Consolas"/>')
        rPr.append(rFonts)
        
    if caption:
        p_cap = doc.add_paragraph()
        p_cap.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_cap.paragraph_format.bidi = True
        p_cap.paragraph_format.space_before = Pt(2)
        p_cap.paragraph_format.space_after = Pt(3)
        r_cap = p_cap.add_run(caption)
        apply_run_font(r_cap, size_pt=9, bold=True, italic=True, color_rgb=(100, 116, 139))

def add_table_data(doc, headers, data, col_widths=None, caption=""):
    if caption:
        p_cap = doc.add_paragraph()
        p_cap.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        p_cap.paragraph_format.bidi = True
        p_cap.paragraph_format.space_before = Pt(3)
        p_cap.paragraph_format.space_after = Pt(2)
        r_cap = p_cap.add_run(caption)
        apply_run_font(r_cap, size_pt=9.5, bold=True, color_rgb=(15, 53, 98))
        
    tbl = doc.add_table(rows=len(data) + 1, cols=len(headers))
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_rtl(tbl)
    set_table_borders(tbl, color="CBD5E1", sz="4")
    
    # Headers
    for j, h in enumerate(headers):
        cell = tbl.cell(0, j)
        set_cell_shading(cell, "1E3A8A")
        set_cell_margins(cell, top=70, bottom=70, left=100, right=100)
        p = cell.paragraphs[0]
        p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.bidi = True
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        run = p.add_run(h)
        apply_run_font(run, size_pt=9.5, bold=True, color_rgb=(255, 255, 255))
        
    # Rows
    for i, row in enumerate(data):
        shading = "F8FAFC" if i % 2 == 1 else "FFFFFF"
        for j, val in enumerate(row):
            cell = tbl.cell(i + 1, j)
            if shading != "FFFFFF":
                set_cell_shading(cell, shading)
            set_cell_margins(cell, top=60, bottom=60, left=100, right=100)
            p = cell.paragraphs[0]
            p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.RIGHT if j > 0 else WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.bidi = True
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.1
            run = p.add_run(val)
            apply_run_font(run, size_pt=9, bold=False, color_rgb=(30, 41, 59))
            
    p_after = doc.add_paragraph()
    p_after.paragraph_format.space_before = Pt(0)
    p_after.paragraph_format.space_after = Pt(3)

print("Base helper definitions loaded successfully.")
